import { Injectable } from '@nestjs/common';
import AWS = require('aws-sdk');

@Injectable()
export class AwsS3Service {
    private AwsS3;

    constructor(){
        AWS.config.loadFromPath('./aws.config.json');
        this.AwsS3 = new AWS.S3({apiVersion: '2006-03-01'});
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

    async getObject(downloadParams) : Promise<any> {
        return new Promise((resolve , reject) => {
              this.AwsS3.listObjects(downloadParams, function(err, data) {
                if (err) {
                    reject(err)
                  } if (data) {
                    resolve(data)
                  }
              });
        })
    }
}
