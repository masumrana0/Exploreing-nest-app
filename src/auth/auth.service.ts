import { Injectable } from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './auth.Schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  getUser() {
    return {
      name: 'masum Rana',
      age: '24',
    };
  }

  getData(data: AuthDto) {
    return data;
  }

  async createUser(data: AuthDto) {
    const result = await this.userModel.create(data);
    return result;
  }
}
