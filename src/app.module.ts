import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
// import { NoteModule } from './note/note.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ChudeModule } from './chude/chude.module';
import { BaidangModule } from './baidang/baidang.module';
import { DonviModule } from './donvi/donvi.module';
import { BaocaoModule } from './baocao/baocao.module';
import { NhiemvuModule } from './nhiemvu/nhiemvu.module';
import { NoidungModule } from './noidung/noidung.module';
import { TinhtrangModule } from './tinhtrang/tinhtrang.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    // NoteModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChudeModule,
    BaidangModule,
    DonviModule,
    BaocaoModule,
    NhiemvuModule,
    NoidungModule,
    TinhtrangModule,
    PersonModule,
  ],
})
export class AppModule {}
