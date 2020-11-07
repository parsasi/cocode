import { Injectable } from '@nestjs/common'
import axios  = require('axios')
import path = require('path')

@Injectable()
export class CodeJarService {
    async createWorkspace(){

        const baseUrl = 'https://codejar.live'

        const createUrl = path.join(baseUrl , '/ws/create')

        const workspace = await (await axios.default.get(createUrl)).data

        return {
            adminUrl : path.join(baseUrl , '/ws', workspace.adminCode),
            publicUrl : path.join(baseUrl , '/ws' , workspace.publicCode)
        }
    
    }
}


// {
//     "adminCode": "929543a2-a64c-4870-8f8e-af1f4e422247",
//     "publicCode": "1315d1be-6db6-4691-aa23-fe4f5b3ad318"
// }