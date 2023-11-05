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
      email: 'admin@example.com',
      hashedPassword:
        '$argon2id$v=19$m=65536,t=3,p=4$e3OlM+UhXSnMtNuBtCdBVg$BNBn3F0JvdS0Dyj9rKupfPhsuF19qqj1mmZd0U+1SpY',
      createdAt: new Date(),
      updatedAt: new Date(),
      idAdmin: admin.id,
    },
  });
  const user1 = await prisma.user.create({
    data: {
      email: 'trungdoan@example.com',
      hashedPassword:
        '$argon2id$v=19$m=65536,t=3,p=4$e3OlM+UhXSnMtNuBtCdBVg$BNBn3F0JvdS0Dyj9rKupfPhsuF19qqj1mmZd0U+1SpY',
      createdAt: new Date(),
      updatedAt: new Date(),
      // idAdmin: admin.id,
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: 'tieudoan@example.com',
      hashedPassword:
        '$argon2id$v=19$m=65536,t=3,p=4$e3OlM+UhXSnMtNuBtCdBVg$BNBn3F0JvdS0Dyj9rKupfPhsuF19qqj1mmZd0U+1SpY',
      createdAt: new Date(),
      updatedAt: new Date(),
      // idAdmin: admin.id,
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
  const chuDe1 = await prisma.chuDe.create({
    data: {
      name: 'Chu De Name 1',
    },
  });

  const donVi = await prisma.donVi.create({
    data: {
      name: 'Quân Khu',
    },
  });
  const donVi1 = await prisma.donVi.create({
    data: {
      name: 'Sư đoàn',
    },
  });
  const donVi2 = await prisma.donVi.create({
    data: {
      name: 'Trung đoàn',
    },
  });
  const donVi3 = await prisma.donVi.create({
    data: {
      name: 'Tiểu đoàn',
    },
  });
  const donVi4 = await prisma.donVi.create({
    data: {
      name: 'Đại đội',
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
      name: 'Chưa nhận',
    },
  });
  const tinhTrang1 = await prisma.tinhTrang.create({
    data: {
      name: 'Đã nhận',
    },
  });
  const tinhTrang2 = await prisma.tinhTrang.create({
    data: {
      name: 'Đang xử lý',
    },
  });
  const tinhTrang3 = await prisma.tinhTrang.create({
    data: {
      name: 'Đã báo cáo',
    },
  });

  const person = await prisma.person.create({
    data: {
      firstName: 'Duẩn',
      lastName: 'Phạm Quang',
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
      idDonVi: 3, // assuming a DonVi with id 1 exists
      // idUser: user.id, // from the previously created user
    },
  });
  const person1 = await prisma.person.create({
    data: {
      firstName: 'Tuấn',
      lastName: 'Trần Nguyễn Minh',
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
      idDonVi: 4, // assuming a DonVi with id 1 exists
      // idUser: user.id, // from the previously created user
    },
  });

  const nhiemVu = await prisma.nhiemVu.create({
    data: {
      tenNhiemVu: 'Nhiem Vu Name',
      idNoiDung: 1,
      idNguoiGiao: 1,
      ngayGiao: '2023-11-03T08:26:11.005Z',
      thoiHan: '2023-11-03T08:26:11.005Z',
      idTinhTrang: 1,
      idChuDe: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  const nhiemVu1 = await prisma.nhiemVu.create({
    data: {
      tenNhiemVu: 'Nhiem Vu Name 1',
      idNoiDung: 1,
      idNguoiGiao: 1,
      ngayGiao: '2023-11-03T08:26:11.005Z',
      thoiHan: '2023-11-03T08:26:11.005Z',
      idTinhTrang: 1,
      idChuDe: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  const donViNhan = await prisma.donViNhan.create({
    data: {
      idNhiemVu: nhiemVu.id,
      idDonVi: donVi.id,
    },
  });
  const chuDeNhan = await prisma.chuDeNhan.create({
    data: {
      idNhiemVu: nhiemVu.id,
      idChuDe: chuDe.id,
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
