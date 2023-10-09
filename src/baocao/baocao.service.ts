import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertBaoCaoDTO } from './dto/insert.baocao.dto';

@Injectable()
export class BaocaoService {
  constructor(private prismaService: PrismaService) {}
  insertBaoCao(insertBaoCaoDTO: InsertBaoCaoDTO) {
    return this.prismaService.baoCao.create({
      data: {
        ...insertBaoCaoDTO,
      },
    });
  }
}
