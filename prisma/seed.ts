import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.admin.create({
    data: {
      name: 'Admin Name',
    },
  });

  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      hashedPassword:
        '$argon2id$v=19$m=65536,t=3,p=4$e3OlM+UhXSnMtNuBtCdBVg$BNBn3F0JvdS0Dyj9rKupfPhsuF19qqj1mmZd0U+1SpY',
      createdAt: new Date(),
      updatedAt: new Date(),
      idAdmin: admin.id,
    },
  });

  const baiDang = await prisma.baiDang.create({
    data: {
      tenBaiDang: 'Bai Dang Name',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const baoCao = await prisma.baoCao.create({
    data: {
      name: 'Bao Cao Name',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  const chuDe = await prisma.chuDe.create({
    data: {
      name: 'Chu De Name',
    },
  });

  const donVi = await prisma.donVi.create({
    data: {
      name: 'Don Vi Name',
    },
  });

  const nhiemVu = await prisma.nhiemVu.create({
    data: {
      tenNhiemVu: 'Nhiem Vu Name',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const chuDeNhan = await prisma.chuDeNhan.create({
    data: {
      idNhiemVu: nhiemVu.id,
      idChuDe: chuDe.id,
    },
  });

  const donViNhan = await prisma.donViNhan.create({
    data: {
      idNhiemVu: nhiemVu.id,
      idDonVi: donVi.id,
    },
  });

  const noiDung = await prisma.noiDung.create({
    data: {
      tenBaiDang: 'Noi Dung Name',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  const tinhTrang = await prisma.tinhTrang.create({
    data: {
      daNhan: true,
      dangXuLy: false,
      hoanThanh: false,
    },
  });

  const person = await prisma.person.create({
    data: {
      firstName: 'First Name',
      lastName: 'Last Name',
      createdAt: new Date(),
      updatedAt: new Date(),
      level: 1,
      phone: '0123456789',
      dateofbirth: '1990-01-01',
      address: '123 Street, City, Country',
      degree: 'Bachelor',
      acedemicrank: 'Professor',
      armyrank: 'General',
      profilepicture: 'link-to-profile-picture',
      bio: 'This is a bio',
      languages: 'English, Vietnamese',
      gender: 'Male',
      idDonVi: 1, // assuming a DonVi with id 1 exists
      idUser: user.id, // from the previously created user
    },
  });

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
