import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class InsertNhiemVuDTO {
  @IsNotEmpty()
  tenNhiemVu: string;

  @IsNumber()
  @Type(() => Number)
  idNoiDung: number;

  @IsNumber()
  @Type(() => Number)
  idNguoiGiao: number;

  @IsDate()
  ngayGiao: Date;

  @IsDate()
  thoiHan: Date;

  @IsOptional()
  loaiTin: string;

  @IsNumber()
  @Type(() => Number)
  idTinhTrang: number;
}
