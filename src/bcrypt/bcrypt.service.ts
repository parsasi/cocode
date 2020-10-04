import { Injectable } from '@nestjs/common';
import {hash , compare} from 'bcrypt'

@Injectable()
export class BcryptService {
    constructor(){}
    async hash(stringToHash : string) : Promise<string> {
        return await hash(stringToHash , 10);
    }

    async BcryptCompare(stringToCompare : string , hashedToCompare : string) : Promise<boolean> {
        return await compare(stringToCompare , hashedToCompare);
    }
}
