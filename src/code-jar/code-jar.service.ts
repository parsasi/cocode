import { Injectable } from '@nestjs/common'
import axios  = require('axios')
import path = require('path')

@Injectable()
export class CodeJarService {
    async createWorkspace(){

        const baseUrl = 'https://codejar.live/'

        const createUrl = new URL('/ws/create' , baseUrl)


        const workspace = await (await axios.default.get(createUrl.toString())).data

        return {
            adminUrl : new URL(`/ws/${workspace.adminCode}`, baseUrl).toString(),
            publicUrl : new URL(`/ws/${workspace.publicCode}` , baseUrl).toString()
        }
    
    }
}


// {
//     "adminCode": "929543a2-a64c-4870-8f8e-af1f4e422247",
//     "publicCode": "1315d1be-6db6-4691-aa23-fe4f5b3ad318"
// }