// export interface AuthDTO {
//   email: string;
//   password: string;
// }

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

}
