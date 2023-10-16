import { Type } from 'class-transformer';
import { IsBoolean } from 'class-validator';

export class InsertTinhTrangDTO {
  @IsBoolean()
  @Type(() => Boolean)
  daNhan: boolean;

  @IsBoolean()
  @Type(() => Boolean)
  dangXuLy: boolean;

  @IsBoolean()
  @Type(() => Boolean)
  hoanThanh: boolean;
}
