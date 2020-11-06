import { Module } from '@nestjs/common';
import { AttendService } from './attend.service';
import { AttendController } from './attend.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Attend } from './attend.entity'
import { SessionModule } from '../session/session.module'
import { UserModule } from '../user/user.module'
import { AttendHelperService } from './helpers/attend.helper.service'

@Module({
  providers: [
    AttendService,
    AttendHelperService,
  ],
  controllers: [AttendController],
  imports : [
    TypeOrmModule.forFeature([Attend]),
    SessionModule,
    UserModule,
  ],
  exports : [AttendService,]
})
export class AttendModule {}
