import { Module } from '@nestjs/common'
import { ResumeService } from './resume.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Resume } from './resume.entity'

@Module({
  providers: [ResumeService],
  imports : [TypeOrmModule.forFeature([Resume]), ]
})
export class ResumeModule {}
