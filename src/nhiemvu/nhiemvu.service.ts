import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertNhiemVuDTO } from './dto/insert.nhiemvu.dto';

@Injectable()
export class NhiemvuService {
  constructor(private prismaService: PrismaService) {}

  getNhiemVu() {
    return this.prismaService.nhiemVu.findMany();
  }

  insertNhiemVu(insertNhiemVuDTO: InsertNhiemVuDTO) {
    const {
      tenNhiemVu,
      idNoiDung,
      idNguoiGiao,
      ngayGiao,
      thoiHan,
      loaiTin,
      idTinhTrang,
      idDonVi,
      idChuDe,
    } = insertNhiemVuDTO;
    return this.prismaService.nhiemVu.create({
      data: {
        tenNhiemVu,
        idNoiDung: Number(idNoiDung),
        idNguoiGiao: Number(idNguoiGiao),
        ngayGiao,
        thoiHan,
        loaiTin,
        idTinhTrang: Number(idTinhTrang),
        idChuDe: Number(idChuDe),
        // idDonVi: Number(idDonVi),
      },
    });
  }
}
