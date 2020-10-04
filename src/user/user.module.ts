import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Transaction } from './transaction.entity'
import { Tutor } from './tutor.entity'
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { BcryptModule } from '../bcrypt/bcrypt.module'

@Module({
    imports : [TypeOrmModule.forFeature([User , Transaction , Tutor]) , BcryptModule],
    exports : [TypeOrmModule],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}

