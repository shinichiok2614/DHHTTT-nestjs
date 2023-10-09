import { Body, Controller, Post } from '@nestjs/common';
import { InsertBaoCaoDTO } from './dto/insert.baocao.dto';
import { BaocaoService } from './baocao.service';

@Controller('baocao')
export class BaocaoController {
  constructor(private baoCaoService: BaocaoService) {}
  @Post()
  insertBaoCao(@Body() insertBaoCaoDTO: InsertBaoCaoDTO) {
    return this.baoCaoService.insertBaoCao(insertBaoCaoDTO);
  }
}
