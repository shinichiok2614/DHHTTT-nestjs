import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertTinhTrangDTO } from './dto';

@Injectable()
export class TinhtrangService {
  constructor(private prismaService: PrismaService) {}
  insertTinhTrang(insertTinhTrangDTO: InsertTinhTrangDTO) {
    const { name } = insertTinhTrangDTO;
    return this.prismaService.tinhTrang.create({
      data: {
        name,
      },
    });
  }
}
