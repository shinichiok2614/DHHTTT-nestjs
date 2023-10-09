import { Body, Controller, Delete, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { ChudeService } from './chude.service';
import { MyJWTGuard } from 'src/guard';
import { GetUser } from 'src/decorator';
import { InsertChudeDTO } from './dto';

@UseGuards(MyJWTGuard)
@Controller('chude')
export class ChudeController {
  constructor(private chudeService: ChudeService) {}
  @Post()
  insertChude(
    // @GetUser('sub') userId: number,
    @Body() insertChudeDTO: InsertChudeDTO,
  ) {
    return this.chudeService.insertChude(insertChudeDTO);
  }
  @Delete()
  deleteChude(@Query('id', ParseIntPipe) id:number) {
    console.log('id');
    console.log(id);
    return this.chudeService.deleteChudeById(id);
  }
}
