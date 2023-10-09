import { Module } from '@nestjs/common';
import { NhiemvuController } from './nhiemvu.controller';
import { NhiemvuService } from './nhiemvu.service';

@Module({
  controllers: [NhiemvuController],
  providers: [NhiemvuService]
})
export class NhiemvuModule {}
