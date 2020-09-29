import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Tutor } from './tutor.entity'

@Module({
    imports : [TypeOrmModule.forFeature([Tutor])],
    exports : [TypeOrmModule]
})
export class TutorModule {}
