import { Module } from '@nestjs/common';
import { BaocaoController } from './baocao.controller';
import { BaocaoService } from './baocao.service';

@Module({
  controllers: [BaocaoController],
  providers: [BaocaoService]
})
export class BaocaoModule {}
