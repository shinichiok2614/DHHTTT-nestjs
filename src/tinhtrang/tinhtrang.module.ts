import { Module } from '@nestjs/common';
import { TinhtrangController } from './tinhtrang.controller';
import { TinhtrangService } from './tinhtrang.service';

@Module({
  controllers: [TinhtrangController],
  providers: [TinhtrangService]
})
export class TinhtrangModule {}
