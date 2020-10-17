import { Injectable , HttpException , HttpStatus } from '@nestjs/common';
import { InjectRepository  } from '@nestjs/typeorm'
import { Repository, UpdateResult  , InsertResult} from 'typeorm';
import { User } from './user.entity'
import { BcryptService } from '../bcrypt/bcrypt.service'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>,
        private bcryptService : BcryptService
    ){}

    async createUser(user) : Promise<InsertResult> {
        const hashedPassword = await this.bcryptService.hash(user.password)
        delete user.password
        const newUser = {...user , hashedPassword} 
        return this.userRepository.insert(newUser)
    }

    async getUserByEmailLogin(email : string) : Promise<User>{
        const user : User = await this.userRepository.findOne({email})
        if(user)
            return user
        else
            new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
    }

    async getUserByUsername(username : string) : Promise<User | void>{
        const user : User  = await this.userRepository.findOne({username})
        return user
    }

    async getUserByEmail(email : string) : Promise<User> {
        const user : User = await this.userRepository.findOne({email})
        return user
    }

    async editUser(user , id : number) : Promise<User> {
        const userToUpdate  = await this.userRepository.findOne({id})
        user = {...userToUpdate , ...user}
        return await this.userRepository.save(user)
    }

    async updateUserPhoto(key : string , id : number) : Promise<User> {
        const userToUpdate : User = await this.userRepository.findOne({id})
        const user = {...userToUpdate , profilePhoto : key}
        return await this.userRepository.save(user)
    }

    async getUserPhoto(username : string) : Promise<string> {
        const userToGetKeyFrom : User = await this.userRepository.findOne({username})
        const userPhoto = await userToGetKeyFrom.profilePhoto
        return await userPhoto
    }

    async getUserAndTutorByUsername(user : {username : string}) : Promise<User[]>{
        return await (await this.userRepository
            .createQueryBuilder("user")
            .where("user.username like :username", { username:`%${user.username}%` })
            .leftJoinAndSelect("user.tutor", "tutor")
            .getMany())
            .map(item => {
                // This needs to be done inside the query not manually and outside of it 
                // TypeOrm docs do not mention any feature to define which columns to select from the joined table
                delete item.hashedPassword
                delete item.balance
                return item
            });

    }
}
