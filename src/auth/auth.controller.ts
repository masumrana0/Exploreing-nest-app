import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { AuthDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  //   private authService;
  //   constructor() {
  //     this.authService = new AuthService();
  //   }
  //   dependancy
  constructor(private authService: AuthService) {}

  @Get()
  getUser() {
    return this.authService.getUser();
  }

  //   @Post()
  //   getData(@Req() req: Request) {
  //     return this.authService.getData(req.body);
  //   }
  //   @Post()
  //   getData(@Body() authDto: AuthDto) {
  //     return this.authService.getData(authDto);
  //   }

  @Post()
  async createUser(@Body() authDto: AuthDto) {
    console.log(authDto);

    return this.authService.createUser(authDto);
  }
}
