import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class InsertBaiDangDTO {
  @IsString()
  @IsNotEmpty()
  tenBaiDang: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  idChuDe: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  idBaoCao: number;
}
