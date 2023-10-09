import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertDonViDTO } from './dto';

@Injectable()
export class DonviService {
  constructor(private prismaService: PrismaService) {}
  async insertDonvi(insertDonVi: InsertDonViDTO) {
    return this.prismaService.donVi.create({
      data: {
        ...insertDonVi,
      },
    });
  }
  async deleteDonVi(id: number) {
    const donvi = await this.prismaService.donVi.findUnique({
      where: {
        id,
      },
    });
    if (donvi) {
      return await this.prismaService.donVi.delete({
        where: {
          id,
        },
      });
    }
  }
}
