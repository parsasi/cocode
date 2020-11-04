import {UseGuards} from '@nestjs/common'
import { SubscribeMessage, WebSocketGateway , ConnectedSocket  , MessageBody } from '@nestjs/websockets';
import { WsGuard } from '../auth/ws-auth.guard'
import { Socket } from 'socket.io'


@WebSocketGateway()
export class WebRtcSignalingGateway {

  @UseGuards(WsGuard)
  @SubscribeMessage('call')
  handleMessage( @ConnectedSocket() client: Socket, @MessageBody() data): string 
    {
      client.broadcast.emit('offer' , data)
      return 'Hello world!';
  }
}
