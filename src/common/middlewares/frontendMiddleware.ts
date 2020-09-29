import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import {FrontendService} from '../../frontend/frontend.service'
import {HttpStatus} from '@nestjs/common'
@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  constructor(private readonly frontendService: FrontendService) {}
  async use(req: Request, res: Response, next: () => void) {
    if (/[^\\/]+\.[^\\/]+$/.test(req.path)) {
      const file = this.frontendService.getAssetPath(req.path);
      res.sendFile(file, (err) => {
      if (err) {
       res.status(HttpStatus.NOT_FOUND).end();
      }
     });
    } else {
      return next();
    }
  }
}