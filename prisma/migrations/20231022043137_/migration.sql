-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "idAdmin" INTEGER,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "level" INTEGER,
    "phone" TEXT,
    "dateofbirth" TEXT,
    "address" TEXT,
    "degree" TEXT,
    "acedemicrank" TEXT,
    "armyrank" TEXT,
    "profilepicture" TEXT,
    "bio" TEXT,
    "languages" TEXT,
    "gender" TEXT,
    "idDonVi" INTEGER,
    "idUser" INTEGER,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BaiDang" (
    "id" SERIAL NOT NULL,
    "tenBaiDang" TEXT NOT NULL,
    "idChuDe" INTEGER,
    "idBaoCao" INTEGER,
    "idDonVi" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "tinhTrangId" INTEGER,

    CONSTRAINT "BaiDang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BaoCao" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "idNhiemVu" INTEGER,
    "idTinhTrang" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

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
    "name" TEXT NOT NULL,

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
    "idDonVi" INTEGER,
    "idChuDe" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NhiemVu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NoiDung" (
    "id" SERIAL NOT NULL,
    "tenBaiDang" TEXT,
    "soLuong" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

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

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "id_admin_user" ON "users"("idAdmin");

-- CreateIndex
CREATE INDEX "id_don_vi_person" ON "Person"("idDonVi");

-- CreateIndex
CREATE INDEX "id_user_person" ON "Person"("idUser");

-- CreateIndex
CREATE INDEX "id_chu_de_baidang" ON "BaiDang"("idChuDe");

-- CreateIndex
CREATE INDEX "id_bao_cao" ON "BaiDang"("idBaoCao");

-- CreateIndex
CREATE INDEX "id_don_vi_baidang" ON "BaiDang"("idDonVi");

-- CreateIndex
CREATE INDEX "id_nhiem_vu" ON "BaoCao"("idNhiemVu");

-- CreateIndex
CREATE INDEX "id_tinh_trang_baocao" ON "BaoCao"("idTinhTrang");

-- CreateIndex
CREATE INDEX "id_noi_dung" ON "NhiemVu"("idNoiDung");

-- CreateIndex
CREATE INDEX "id_nguoi_giao" ON "NhiemVu"("idNguoiGiao");

-- CreateIndex
CREATE INDEX "id_tinh_trang_nhiemvu" ON "NhiemVu"("idTinhTrang");

-- CreateIndex
CREATE INDEX "id_chu_de_nhiemvu" ON "NhiemVu"("idChuDe");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_idAdmin_fkey" FOREIGN KEY ("idAdmin") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_idDonVi_fkey" FOREIGN KEY ("idDonVi") REFERENCES "DonVi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaiDang" ADD CONSTRAINT "BaiDang_idChuDe_fkey" FOREIGN KEY ("idChuDe") REFERENCES "ChuDe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaiDang" ADD CONSTRAINT "BaiDang_idBaoCao_fkey" FOREIGN KEY ("idBaoCao") REFERENCES "BaoCao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaiDang" ADD CONSTRAINT "BaiDang_idDonVi_fkey" FOREIGN KEY ("idDonVi") REFERENCES "DonVi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaiDang" ADD CONSTRAINT "BaiDang_tinhTrangId_fkey" FOREIGN KEY ("tinhTrangId") REFERENCES "TinhTrang"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaoCao" ADD CONSTRAINT "BaoCao_idNhiemVu_fkey" FOREIGN KEY ("idNhiemVu") REFERENCES "NhiemVu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaoCao" ADD CONSTRAINT "BaoCao_idTinhTrang_fkey" FOREIGN KEY ("idTinhTrang") REFERENCES "TinhTrang"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NhiemVu" ADD CONSTRAINT "NhiemVu_idNoiDung_fkey" FOREIGN KEY ("idNoiDung") REFERENCES "NoiDung"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NhiemVu" ADD CONSTRAINT "NhiemVu_idNguoiGiao_fkey" FOREIGN KEY ("idNguoiGiao") REFERENCES "Person"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NhiemVu" ADD CONSTRAINT "NhiemVu_idTinhTrang_fkey" FOREIGN KEY ("idTinhTrang") REFERENCES "TinhTrang"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NhiemVu" ADD CONSTRAINT "NhiemVu_idDonVi_fkey" FOREIGN KEY ("idDonVi") REFERENCES "DonVi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NhiemVu" ADD CONSTRAINT "NhiemVu_idChuDe_fkey" FOREIGN KEY ("idChuDe") REFERENCES "ChuDe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
