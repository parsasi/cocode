import { Module } from '@nestjs/common'
import { ResumeService } from './resume.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Resume } from './resume.entity'
import { TutorModule } from '../tutor/tutor.module'
import { ResumeController } from './resume.controller'

@Module({
  providers: [ResumeService],
  imports : [
    TypeOrmModule.forFeature([Resume]),
    TutorModule,
  ],
  controllers: [ResumeController]
})
export class ResumeModule {}
