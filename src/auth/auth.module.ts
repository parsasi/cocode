import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module'
import { BcryptModule } from '../bcrypt/bcrypt.module'
import { LocalStrategy } from './local.strategy'
import { PassportModule } from '@nestjs/passport'

@Module({
  imports : [UserModule , BcryptModule , PassportModule],
  providers: [AuthService , LocalStrategy]
})
export class AuthModule {}
