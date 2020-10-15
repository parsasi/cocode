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

    async getBuckets() : Promise<any>{
        return new Promise((resolve , reject) => {
            this.AwsS3.listBuckets((err , data) =>{
                if(err) reject(err);
                else resolve(data.Buckets)
            })
        })
    }
}
