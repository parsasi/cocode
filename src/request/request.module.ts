import { Module, Session } from '@nestjs/common';
import { RequestService } from './request.service';
import { RequestController } from './request.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Request } from './request.entity'
import { UserModule } from '../user/user.module'
import { TutorModule } from '../tutor/tutor.module'
import { CategoryModule } from '../category/category.module'
import { RequestHelperService } from './helpers/request.helper.service'
import { SessionModule } from '../session/session.module'

@Module({
  providers: [
    RequestService,
    RequestHelperService
  ],
  controllers: [RequestController],
  imports : [
    TypeOrmModule.forFeature([Request]),
    UserModule,
    CategoryModule,
    UserModule,
    TutorModule,
    SessionModule
  ],

})
export class RequestModule {}
