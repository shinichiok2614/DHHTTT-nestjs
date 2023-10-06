import { Module } from '@nestjs/common';
import { ChudeService } from './chude.service';
import { ChudeController } from './chude.controller';

@Module({
  providers: [ChudeService],
  controllers: [ChudeController]
})
export class ChudeModule {}
