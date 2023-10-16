import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class InsertNoiDungDTO {
  tenBaiDang: string;

  @IsNumber()
  @Type(() => Number)
  soLuong: number;
}
