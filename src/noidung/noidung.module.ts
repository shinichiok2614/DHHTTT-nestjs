import { Module } from '@nestjs/common';
import { NoidungController } from './noidung.controller';
import { NoidungService } from './noidung.service';

@Module({
  controllers: [NoidungController],
  providers: [NoidungService]
})
export class NoidungModule {}
