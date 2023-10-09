import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertBaiDangDTO } from './dto/insert.baidang.dto';

@Injectable()
export class BaidangService {
  constructor(private prismaService: PrismaService) {}
  async insertBaiDang(insertBaiDang: InsertBaiDangDTO) {
    const baidang = await this.prismaService.baiDang.create({
      data: {
        ...insertBaiDang,
      },
    });
    return baidang;
  }
  // async getBaiDang(userId: number) {
  //   const baidang = await this.prismaService.baiDang.findMany({
  //     where: {
  //       userId,
  //     },
  //   });
  //   return baidang;
  // }
}
