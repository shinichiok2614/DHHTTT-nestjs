import { Module } from '@nestjs/common';
import { DonviService } from './donvi.service';
import { DonviController } from './donvi.controller';

@Module({
  providers: [DonviService],
  controllers: [DonviController]
})
export class DonviModule {}
