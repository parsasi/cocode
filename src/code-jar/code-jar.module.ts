import { Module } from '@nestjs/common';
import { CodeJarService } from './code-jar.service';

@Module({
  providers: [CodeJarService],
  exports : [CodeJarService]
})
export class CodeJarModule {}
