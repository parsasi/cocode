import { Module  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module'
import { BcryptModule } from '../bcrypt/bcrypt.module'
import { LocalStrategy } from './local.strategy'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constant'



@Module({
  imports : [UserModule
            , BcryptModule 
            , PassportModule 
            , JwtModule.register({
                secret : jwtConstants.secret,
                signOptions: { expiresIn: '7d' },
            })
          ],
  providers: [AuthService , LocalStrategy],
  exports : [AuthService]
})
export class AuthModule {}
