import { Module } from '@nestjs/common';
import { NhiemvuController } from './nhiemvu.controller';
import { NhiemvuService } from './nhiemvu.service';
import { UserService } from 'src/user/user.service';

@Module({
  controllers: [NhiemvuController],
  providers: [NhiemvuService, UserService],
})
export class NhiemvuModule {}
