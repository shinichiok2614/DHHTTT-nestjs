import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertNoiDungDTO } from './dto';

@Injectable()
export class NoidungService {
  constructor(private prismaService: PrismaService) {}
  insertNoiDung(insertNoiDung: InsertNoiDungDTO) {
    const { tenBaiDang, soLuong } = insertNoiDung;
    return this.prismaService.noiDung.create({
      data: {
        tenBaiDang,
        soLuong: Number(soLuong),
      },
    });
  }
}
