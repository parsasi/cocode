import { Module } from '@nestjs/common';
import { AwsS3Module } from '../aws-s3/aws-s3.module'

@Module({
    imports : [AwsS3Module],
    exports : [AwsS3Module]
})
export class AwsModule {}
