import { Injectable } from '@nestjs/common';
import { InsertChudeDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChudeService {
  constructor(private prismaService: PrismaService) {}
  async insertChude(userId: number, insertChude: InsertChudeDTO) {
    const chude =await this.prismaService.chuDe.create({
      data: {
        ...insertChude,
        //baidang
      },
    });
    return chude;
  }
}
