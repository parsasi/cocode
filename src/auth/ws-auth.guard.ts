import {Injectable ,CanActivate } from '@nestjs/common'
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
@Injectable()
export class WsGuard implements CanActivate {

  constructor(
      private userService: UserService,
      private jwtService : JwtService,
      ) {
  }

  canActivate(
    context: any,
  ): boolean | any | Promise<boolean | any> | Observable<boolean | any> {
    const tokenString: string | void = context.args[0].handshake.headers.authorization;
    if(!tokenString){
        return false;
    }
    const bearerToken = context.args[0].handshake.headers.authorization.split(' ')[1];
    try {
      const decoded = this.jwtService.verify(bearerToken) as any;
      return new Promise((resolve, reject) => {
        return this.userService.getUserByEmailLogin(decoded.email).then(user => {
          if (user) {
            resolve(user);
          } else {
            reject(false);
          }
        });

      });
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
