import { Controller , Get } from '@nestjs/common';
import {FrontendService} from './frontend.service'

@Controller()
export class FrontendController {
    constructor(private frontendService : FrontendService){}
    
    @Get('*')
    public async getAll(): Promise<string>{
        return await this.frontendService.getApp();
    }
}
