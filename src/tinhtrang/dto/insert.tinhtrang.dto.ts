import { Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class InsertTinhTrangDTO {
  @IsString()
  @IsOptional()
  name: string;
}
