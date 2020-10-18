import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Session } from './session.entity'

@Module({
  providers: [SessionService],
  controllers: [SessionController],
  imports : [TypeOrmModule.forFeature([Session])],

})
export class SessionModule {}
