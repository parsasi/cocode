import { Module } from '@nestjs/common';
import { WebRtcSignalingGateway } from './web-rtc-signaling.gateway'
import { UserModule } from '../user/user.module'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from '../auth/constant'

@Module({
    imports : [
        UserModule,
        JwtModule.register({
            secret : jwtConstants.secret,
            signOptions: { expiresIn: '7d' },
        })
    ],
    providers : [WebRtcSignalingGateway],
    exports : [WebRtcSignalingGateway]
})
export class WebRtcSignalingModule {}
