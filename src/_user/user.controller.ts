import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/user')
export class UserController {
  @Get()
  getUsers() {
    return {
      name: 'masum Rana',
      email: 'masum@gmial.com',
    };
  }

  @Get('/:userid')
  getUser(@Param() userid: number) {
    return userid;
  }

  @Post()
  storeUser(@Req() req: Request) {
    // console.log(req.body);
    return req.body;
  }
}
