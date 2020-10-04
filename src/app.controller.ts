import { Controller, Request, Post, UseGuards, Get , HttpStatus } from '@nestjs/common';
import { AuthService } from './auth/auth.service'
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard'

@Controller()
export class AppController {
  constructor(private authService : AuthService){}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  //Example of a authenticated route 
  @UseGuards(JwtAuthGuard)
  @Get('auth/test')
  async isAuthed() {
    return HttpStatus.OK
  }
}