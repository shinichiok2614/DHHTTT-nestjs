import {
  Body,
  Controller,
  Delete,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { InsertDonViDTO } from './dto';
import { DonviService } from './donvi.service';
import { MyJWTGuard } from 'src/guard';

@UseGuards(MyJWTGuard)
@Controller('donvi')
export class DonviController {
  constructor(private donViService: DonviService) {}
  @Post()
  insertDonVi(@Body() insertDonViDTO: InsertDonViDTO) {
    return this.donViService.insertDonvi(insertDonViDTO);
  }
  @Delete()
  deleteDonVi(@Query('id', ParseIntPipe) id: number) {
    return this.donViService.deleteDonVi(id);
  }
}
