import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import {Rating} from './rating.entity'
@Module({
    imports : [TypeOrmModule.forFeature([Rating])],
    exports : [TypeOrmModule]
})
export class RatingModule {}
