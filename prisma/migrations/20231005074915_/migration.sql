-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BaiDang" (
    "id" SERIAL NOT NULL,
    "tenBaiDang" TEXT NOT NULL,
    "idChuDe" INTEGER,
    "idBaoCao" INTEGER,

    CONSTRAINT "BaiDang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BaoCao" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "idNhiemVu" INTEGER,
    "idDonVi" INTEGER,

    CONSTRAINT "BaoCao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChuDe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ChuDe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonVi" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "DonVi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NhiemVu" (
    "id" SERIAL NOT NULL,
    "tenNhiemVu" TEXT NOT NULL,
    "idNoiDung" INTEGER,
    "idNguoiGiao" INTEGER,
    "ngayGiao" TIMESTAMP(3),
    "thoiHan" TIMESTAMP(3),
    "loaiTin" TEXT,
    "idTinhTrang" INTEGER,

    CONSTRAINT "NhiemVu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NoiDung" (
    "id" SERIAL NOT NULL,
    "tenBaiDang" TEXT,
    "soLuong" INTEGER,

    CONSTRAINT "NoiDung_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TinhTrang" (
    "id" SERIAL NOT NULL,
    "daNhan" BOOLEAN,
    "dangXuLy" BOOLEAN,
    "hoanThanh" BOOLEAN,

    CONSTRAINT "TinhTrang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "username" TEXT,
    "password" TEXT,
    "level" INTEGER NOT NULL,
    "idPermission" INTEGER,
    "phone" TEXT,
    "email" TEXT,
    "dateofbirth" TEXT,
    "address" TEXT,
    "degree" TEXT,
    "acedemicrank" TEXT,
    "armyrank" TEXT,
    "profilepicture" TEXT,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Permission" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "giaoNhiemVu" BOOLEAN,
    "baoCao" BOOLEAN,
    "thongKe" BOOLEAN,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "id_chu_de" ON "BaiDang"("idChuDe");

-- CreateIndex
CREATE INDEX "id_bao_cao" ON "BaiDang"("idBaoCao");

-- CreateIndex
CREATE INDEX "id_nhiem_vu" ON "BaoCao"("idNhiemVu");

-- CreateIndex
CREATE INDEX "id_don_vi" ON "BaoCao"("idDonVi");

-- CreateIndex
CREATE INDEX "id_noi_dung" ON "NhiemVu"("idNoiDung");

-- CreateIndex
CREATE INDEX "id_nguoi_giao" ON "NhiemVu"("idNguoiGiao");

-- CreateIndex
CREATE INDEX "id_tinh_trang" ON "NhiemVu"("idTinhTrang");

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaiDang" ADD CONSTRAINT "BaiDang_idChuDe_fkey" FOREIGN KEY ("idChuDe") REFERENCES "ChuDe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaiDang" ADD CONSTRAINT "BaiDang_idBaoCao_fkey" FOREIGN KEY ("idBaoCao") REFERENCES "BaoCao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaoCao" ADD CONSTRAINT "BaoCao_idNhiemVu_fkey" FOREIGN KEY ("idNhiemVu") REFERENCES "NhiemVu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaoCao" ADD CONSTRAINT "BaoCao_idDonVi_fkey" FOREIGN KEY ("idDonVi") REFERENCES "DonVi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NhiemVu" ADD CONSTRAINT "NhiemVu_idNoiDung_fkey" FOREIGN KEY ("idNoiDung") REFERENCES "NoiDung"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NhiemVu" ADD CONSTRAINT "NhiemVu_idNguoiGiao_fkey" FOREIGN KEY ("idNguoiGiao") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NhiemVu" ADD CONSTRAINT "NhiemVu_idTinhTrang_fkey" FOREIGN KEY ("idTinhTrang") REFERENCES "TinhTrang"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_idPermission_fkey" FOREIGN KEY ("idPermission") REFERENCES "Permission"("id") ON DELETE SET NULL ON UPDATE CASCADE;
