import { Body, Controller, Post, UseGuards } from '@nestjs/common';
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
    @GetUser('sub') userId: number,
    @Body() insertChudeDTO: InsertChudeDTO,
  ) {
    console.log('insertChude');
    console.log('userId');
    console.log(userId);
    console.log('insertChudeDTO');
    console.log(JSON.stringify(insertChudeDTO));
    return this.chudeService.insertChude(userId, insertChudeDTO);
  }
}
