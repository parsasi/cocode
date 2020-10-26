import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service';

@Module({
  providers: [ResumeService]
})
export class ResumeModule {}
