import { Body, Controller, Post } from '@nestjs/common';
import { NoidungService } from './noidung.service';
import { InsertNoiDungDTO } from './dto';

@Controller('noidung')
export class NoidungController {
  constructor(private noiDungService: NoidungService) {}

  @Post()
  insertNoiDung(@Body() insertNoiDung: InsertNoiDungDTO) {
    return this.noiDungService.insertNoiDung(insertNoiDung);
  }
}
