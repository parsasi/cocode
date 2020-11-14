import { Injectable } from '@nestjs/common';
import AWS = require('aws-sdk');
import { ConfigService } from '@nestjs/config'


@Injectable()
export class AwsS3Service {
    private AwsS3;

    constructor(
        private configService : ConfigService
    ){
        this.ConfigCredintials()
        this.AwsS3 = new AWS.S3({apiVersion: '2006-03-01'});
    }

    ConfigCredintials(){
        AWS.config.update({
            accessKeyId : this.configService.get('AWS_ACCESS_KEY_ID'),
            secretAccessKey : this.configService.get('AWS_SECRET_ACCESS_KEY'),
            region : this.configService.get('AWS_REGION')
        })
    }

    ConfirmCredentials(){
        AWS.config.getCredentials(function(err){
            if (err) console.log(err);
            // credentials not loaded
            else {
                console.log(AWS.config.credentials.accessKeyId)
            }   
          });
    }

    async getBucket(bucketName : string) : Promise<any>{
        return new Promise((resolve , reject) => {
            this.AwsS3.listBuckets(async (err , data) =>{
                if(err) reject(err);
                else{
                    const bucket : Record<string , unknown> | void = data.Buckets.find(item => item.Name == bucketName)
                    //Resolve the bucket if it exists, create and resolve if it doesn't.
                    if(bucket){
                        resolve(bucket)
                    }else{
                        const newBucket = await this.createBucket(bucketName)
                        //Recursively return the newly created bucket
                        await newBucket && this.getBucket(bucketName).then(resolve).catch(reject)
                    }
                }
            })
        })
    }

    async createBucket(bucketName : string) : Promise<any> {
        const bucketParams = {
            Bucket : bucketName
        };

        return new Promise((resolve , reject) => {
            this.AwsS3.createBucket(bucketParams, function(err, data) {
                if (err) {
                  reject(err)
                } else {
                  resolve(data)
                }
              });              
        })
    }

    async upload(uploadParams) : Promise<any>{
        return new Promise((resolve , reject) => {
            this.AwsS3.upload(uploadParams, function (err, data) {
                if (err) {
                  reject(err)
                } if (data) {
                  resolve(data)
                }
              });
        })
    }

    async getPresignedUrl(downloadParams) : Promise<any> {
        return this.AwsS3.getSignedUrl('getObject' , downloadParams)
    }
}
