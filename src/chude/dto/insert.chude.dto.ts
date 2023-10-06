import { IsNotEmpty, IsString } from 'class-validator';

export class InsertChudeDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}
