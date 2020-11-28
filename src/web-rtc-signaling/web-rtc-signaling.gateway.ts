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
  handleRoom(@ConnectedSocket() client: Socket, @MessageBody() data : CreateRoomGatewayDto): void 
  {
      if(data.uuid){
        client.join(data.uuid)
      }
  }

  @UseGuards(WsGuard)
  @SubscribeMessage('call')
  handleCall(@ConnectedSocket() client: Socket, @MessageBody() data ): void 
  {
      if(data.uuid){
        client.in(data.uuid).emit('offer' , data.offer)
      }
  }
  @UseGuards(WsGuard)
  @SubscribeMessage('answer')
  handleAnswer(@ConnectedSocket() client: Socket, @MessageBody() data ): void 
  {
      if(data.uuid){
        client.in(data.uuid).emit('answer' , data.answer)
      }
  }
  @UseGuards(WsGuard)
  @SubscribeMessage('new-ice-candidate')
  handleIce(@ConnectedSocket() client: Socket, @MessageBody() data ): void 
  {
      if(data.uuid){
        client.in(data.uuid).emit('new-ice-candidate' , data.candidate)
      }
  }
}
