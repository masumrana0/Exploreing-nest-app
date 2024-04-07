import { IsEmail, IsNumber, IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsNumber()
  age: number;
}
