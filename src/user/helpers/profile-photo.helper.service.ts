import { Injectable } from '@nestjs/common';
import { AwsS3Service } from '../../aws-s3/aws-s3.service'
import { ModifyFile } from './profile-photo-filter.helper'


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

    async uploadProfilePhoto(file) : Promise<any>{

        const bucket = await this.awsS3Service.getBucket('cocode-profile')

        file = ModifyFile(file)

        const uploadParams = {
            Bucket : bucket.Name,
            Body : file.buffer,
            Key : file.originalname, //Generated uuid inside ModifyFile
        }

        const uploadedFile = await this.awsS3Service.upload(uploadParams)

        return uploadedFile

    }
    
}
