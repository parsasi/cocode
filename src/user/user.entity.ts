
import { Entity, Column, PrimaryGeneratedColumn , OneToOne  , OneToMany} from 'typeorm';
import { Tutor } from '../tutor/tutor.entity'
import { Rating } from '../rating/rating.entity'
import { Attend } from '../attend/attend.entity'
import { Request } from '../request/request.entity'
import { Transaction } from './transaction.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable : false})
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  profilePhoto: string;

  @Column({unique: true , nullable : false})
  email: string;

  @Column({type : 'varchar' , length : 500 , nullable : false})
  hashedPassword: string;

  @Column({default : false})
  isVerified : boolean;

  @Column({unique: true , nullable : false})
  username: string;

  @Column({default : false})
  isBanned : boolean;

  @Column({default : false})
  isAcceptedTerms : boolean;

  @Column({default : 0})
  balance : number;

  @OneToOne(type => Tutor , tutor => tutor.user)
  tutor : Tutor;

  @OneToMany(() => Rating, rating => rating.user)
  ratings : Rating[]

  @OneToMany(() => Attend, attend => attend.user)
  attends : Promise<Attend[]>

  @OneToMany(() => Request, request => request.user)
  requests : Promise<Request[]>

  @OneToMany(() => Transaction , transaction => transaction.user)
  transactions : Promise<Transaction[]>
}