import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { InsertPersonDTO } from './dto';

@Injectable()
export class PersonService {
  constructor(private prismaService: PrismaService) {}

  getAllPerson() {
    return this.prismaService.person.findMany({
      include: {
        DonVi: {
          select: {
            name: true,
          },
        },
        User: {
          select: {
            email: true,
          },
        },
      },
    });
  }

  updatePersonByIdAdmin(id, insertPerson: InsertPersonDTO) {
    const {
      //   firstName,
      //   lastName,
      //   level,
      //   phone,
      //   dateofbirth,
      //   address,
      //   degree,
      //   acedemicrank,
      //   armyrank,
      //   profilepicture,
      //   bio,
      //   languages,
      //   gender,
      //   idDonVi,
      idUser,
    } = insertPerson;
    return this.prismaService.person.update({
      where: {
        id,
      },
      data: {
        // ...insertPerson,
        // firstName,
        // lastName,
        // level,
        // phone,
        // dateofbirth,
        // address,
        // degree,
        // acedemicrank,
        // armyrank,
        // profilepicture,
        // bio,
        // languages,
        // gender,
        // idDonVi,
        idUser: Number(idUser),
      },
    });
  }

  insertPerson(insertPerson: InsertPersonDTO) {
    const {
      firstName,
      lastName,
      level,
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
      idDonVi,
      idUser,
    } = insertPerson;
    return this.prismaService.person.create({
      data: {
        firstName,
        lastName,
        level: Number(level),
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
        idDonVi: Number(idDonVi),
        idUser: Number(idUser),
      },
    });
  }
  getPerson(id: number) {
    return this.prismaService.person.findFirst({
      where: {
        id,
      },
    });
  }
}
