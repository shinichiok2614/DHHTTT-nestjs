import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertNhiemVuDTO } from './dto/insert.nhiemvu.dto';

@Injectable()
export class NhiemvuService {
  constructor(private prismaService: PrismaService) {}
  getNhiemVu() {
    return this.prismaService.nhiemVu.findMany({
      include: {
        NoiDung: {
          select: {
            tenBaiDang: true,
          },
        },
        Person: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        TinhTrang: {
          select: {
            name: true,
          },
        },
        ChuDeNhan: {
          select: {
            ChuDe: {
              select: {
                name: true,
              },
            },
          },
        },
        DonViNhan: {
          select: {
            DonVi: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }

  getNhiemVuUser() {
    return this.prismaService.nhiemVu.findMany({
      where: {
        
      },
    });
  }

  getNhiemVuById(id: number) {
    return this.prismaService.nhiemVu.findUnique({
      where: {
        id,
      },
    });
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
