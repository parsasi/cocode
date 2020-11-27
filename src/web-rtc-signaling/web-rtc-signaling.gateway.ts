import {UseGuards} from '@nestjs/common'
import { SubscribeMessage, WebSocketGateway , ConnectedSocket  , MessageBody , OnGatewayConnection , OnGatewayDisconnect } from '@nestjs/websockets';
import { WsGuard } from '../auth/ws-auth.guard'
import { Socket } from 'socket.io'


interface CreateRoomGatewayDto {
  uuid : string,
  user : any
}

@WebSocketGateway()
export class WebRtcSignalingGateway implements OnGatewayConnection , OnGatewayDisconnect{

  @UseGuards(WsGuard)
  async handleConnection(socket){
    return
  }

  async handleDisconnect(){
    return
  }


  @UseGuards(WsGuard)
  @SubscribeMessage('room')
  handleEvent(@ConnectedSocket() client: Socket, @MessageBody() data : CreateRoomGatewayDto): void 
  {
      if(data.uuid){
        client.join(data.uuid , () => console.log(client.rooms))
      }
  }
}
