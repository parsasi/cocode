import { Module , forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user.entity'
import { Transaction } from './transaction.entity'
import { Tutor } from '../tutor/tutor.entity'
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { BcryptModule } from '../bcrypt/bcrypt.module'
import { AwsModule } from '../aws/aws.module'
import { TutorModule } from '../tutor/tutor.module'

@Module({
    imports : [
        TypeOrmModule.forFeature([User , Transaction , Tutor]),
        BcryptModule,
        AwsModule,
        forwardRef(() => TutorModule)
    ],
    exports : [TypeOrmModule , UserService],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}

