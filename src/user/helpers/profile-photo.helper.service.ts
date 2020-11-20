import { Injectable } from '@nestjs/common';
import { AwsS3Service } from '../../aws-s3/aws-s3.service'

@Injectable()
export class ProfilePhotoHelperService {
    constructor(
        private awsS3Service : AwsS3Service,
    ){}

    async getProfilePhoto(key : string) : Promise<string>{
        const bucket = await this.awsS3Service.getBucket('cocode-profile')
        
        const donwloadParams = {
            Bucket : bucket.Name,
            Key : key,
        }

        return await this.awsS3Service.getPresignedUrl(donwloadParams)
    }

    
}
