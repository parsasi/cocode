import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Rating} from './rating.entity'
import { RatingService } from './rating.service'
import { RatingController } from './rating.controller'
import { UserModule } from '../user/user.module'
import { TutorModule } from '../tutor/tutor.module'
import { AttendModule } from '../attend/attend.module'

@Module({
    imports : [
        TypeOrmModule.forFeature([Rating]),
        TutorModule,
        UserModule,
        AttendModule
    ],
    exports : [TypeOrmModule],
    providers: [RatingService],
    controllers: [RatingController]
})
export class RatingModule {}
