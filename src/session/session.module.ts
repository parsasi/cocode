import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Session } from './session.entity'
import { TutorModule } from '../tutor/tutor.module'

@Module({
  providers: [SessionService],
  controllers: [SessionController],
  imports : [
    TypeOrmModule.forFeature([Session]),
    TutorModule
  ],
  exports : [SessionService]

})
export class SessionModule {}
