import {UseGuards} from '@nestjs/common'
import { SubscribeMessage, WebSocketGateway , ConnectedSocket  , MessageBody , OnGatewayConnection , OnGatewayDisconnect } from '@nestjs/websockets';
import { WsGuard } from '../auth/ws-auth.guard'
import { Socket } from 'socket.io'


@WebSocketGateway()
export class WebRtcSignalingGateway implements OnGatewayConnection , OnGatewayDisconnect{

  async handleConnection(socket){
    // const uuid = socket.handshake.query.uuid
    // if(uuid){
    //   socket.join(uuid)
    // }else{
    //   return socket.disconnect();
    // }
    console.log('Client joined' )
  }

  async handleDisconnect(){
    console.log('Disconnected')
  }


  @UseGuards(WsGuard)
  @SubscribeMessage('room')
  handleEvent(@ConnectedSocket() client: Socket, @MessageBody() data): void 
  {   
      console.log('here')
      console.log(data.id)
      // client.broadcast.emit('offer' , data)
      // return 'Hello world!';
  }
}
