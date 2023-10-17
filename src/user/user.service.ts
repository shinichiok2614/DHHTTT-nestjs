import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDTO } from './dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) { }
  async getUserById(id: number) {
    const user = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });
    delete user.hashedPassword;
    return user;
  }
  async updateUser(id: number, updateUserDTO: UpdateUserDTO) {
    console.log('updateUser');
    const {
      firstName,
      lastName,
      level,
      idPermission,
      phone,
      dateofbirth,
      address,
      degree,
      acedemicrank,
      armyrank,
      profilepicture,
      bio,
      languages,
      gender,
    } = updateUserDTO;
    const data =await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        firstName,
        lastName,
        level: Number(level),
        idPermission: Number(idPermission),
        phone,
        dateofbirth,
        address,
        degree,
        acedemicrank,
        armyrank,
        profilepicture,
        bio,
        languages,
        gender,
      },
    });
    delete data.hashedPassword
    return data
  }
  deleteUser(id: number) {
    return this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}