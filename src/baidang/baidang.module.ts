import { Module } from '@nestjs/common';
import { BaidangService } from './baidang.service';
import { BaidangController } from './baidang.controller';

@Module({
  providers: [BaidangService],
  controllers: [BaidangController]
})
export class BaidangModule {}
