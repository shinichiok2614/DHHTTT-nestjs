import { Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
} from 'class-validator';

export class InsertNhiemVuDTO {
  @IsNotEmpty()
  tenNhiemVu: string;

  @IsNumber()
  @Type(() => Number)
  idNoiDung: number;

  @IsNumber()
  @Type(() => Number)
  idNguoiGiao: number;

  @IsOptional()
  ngayGiao: string;

  @IsOptional()
  thoiHan: string;

  @IsOptional()
  loaiTin: string;

  @IsNumber()
  @Type(() => Number)
  idTinhTrang: number;

  @IsOptional()
  @Type(() => Number)
  idDonVi: number;

  @IsOptional()
  @Type(() => Number)
  idChuDe: number;
}
