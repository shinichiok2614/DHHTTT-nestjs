import { ForbiddenException, Injectable } from '@nestjs/common';
import { InsertChudeDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChudeService {
  constructor(private prismaService: PrismaService) {}
  async insertChude(insertChude: InsertChudeDTO) {
    const chude = await this.prismaService.chuDe.create({
      data: {
        ...insertChude,
        //baidang
      },
    });
    return chude;
  }
  deleteChudeById(chudeId: number) {
    const chude = this.prismaService.chuDe.findUnique({
      where: {
        id: chudeId,
      },
    });
    if (!chude) {
      throw new ForbiddenException('Cannot find Chude to delete');
    }
    return this.prismaService.chuDe.delete({
      where: {
        id: chudeId,
      },
    });
  }
}
