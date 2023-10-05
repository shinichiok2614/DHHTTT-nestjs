-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 13, 2023 at 05:50 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `TCTT`
--

-- --------------------------------------------------------

--
-- Table structure for table `bai_dang`
--

CREATE TABLE `bai_dang` (
  `id` int(11) NOT NULL,
  `ten_bai_dang` varchar(255) NOT NULL,
  `id_chu_de` int(11) DEFAULT NULL,
  `id_bao_cao` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bao_cao`
--

CREATE TABLE `bao_cao` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `id_nhiem_vu` int(11) DEFAULT NULL,
  `id_don_vi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chu_de`
--

CREATE TABLE `chu_de` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `don_vi`
--

CREATE TABLE `don_vi` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nhiem_vu`
--

CREATE TABLE `nhiem_vu` (
  `id` int(11) NOT NULL,
  `ten_nhiem_vu` varchar(255) NOT NULL,
  `id_noi_dung` int(11) DEFAULT NULL,
  `id_nguoi_giao` int(11) DEFAULT NULL,
  `ngay_giao` date DEFAULT NULL,
  `thoi_han` date DEFAULT NULL,
  `loai_tin` varchar(255) DEFAULT NULL,
  `id_tinh_trang` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `noi_dung`
--

CREATE TABLE `noi_dung` (
  `id` int(11) NOT NULL,
  `ten_bai_dang` varchar(255) DEFAULT NULL,
  `so_luong` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `giao_nhiem_vu` tinyint(1) DEFAULT NULL,
  `bao_cao` tinyint(1) DEFAULT NULL,
  `thong_ke` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `level` int(11) NOT NULL,
  `id_permission` int(11) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dateofbirth` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `degree` varchar(255) DEFAULT NULL,
  `acedemicrank` varchar(255) DEFAULT NULL,
  `armyrank` varchar(255) DEFAULT NULL,
  `profilepicture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tinh_trang`
--

CREATE TABLE `tinh_trang` (
  `id` int(11) NOT NULL,
  `da_nhan` tinyint(1) DEFAULT NULL,
  `dang_xu_ly` tinyint(1) DEFAULT NULL,
  `hoan_thanh` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bai_dang`
--
ALTER TABLE `bai_dang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_bao_cao` (`id_bao_cao`),
  ADD KEY `id_chu_de` (`id_chu_de`);

--
-- Indexes for table `bao_cao`
--
ALTER TABLE `bao_cao`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_nhiem_vu` (`id_nhiem_vu`),
  ADD KEY `id_don_vi` (`id_don_vi`);

--
-- Indexes for table `chu_de`
--
ALTER TABLE `chu_de`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `don_vi`
--
ALTER TABLE `don_vi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nhiem_vu`
--
ALTER TABLE `nhiem_vu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_noi_dung` (`id_noi_dung`),
  ADD KEY `id_nguoi_giao` (`id_nguoi_giao`),
  ADD KEY `id_tinh_trang` (`id_tinh_trang`);

--
-- Indexes for table `noi_dung`
--
ALTER TABLE `noi_dung`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_permission` (`id_permission`);

--
-- Indexes for table `tinh_trang`
--
ALTER TABLE `tinh_trang`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bai_dang`
--
ALTER TABLE `bai_dang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bao_cao`
--
ALTER TABLE `bao_cao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chu_de`
--
ALTER TABLE `chu_de`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `don_vi`
--
ALTER TABLE `don_vi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nhiem_vu`
--
ALTER TABLE `nhiem_vu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `noi_dung`
--
ALTER TABLE `noi_dung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tinh_trang`
--
ALTER TABLE `tinh_trang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bai_dang`
--
ALTER TABLE `bai_dang`
  ADD CONSTRAINT `bai_dang_ibfk_1` FOREIGN KEY (`id_bao_cao`) REFERENCES `bao_cao` (`id`),
  ADD CONSTRAINT `bai_dang_ibfk_2` FOREIGN KEY (`id_chu_de`) REFERENCES `chu_de` (`id`),
  ADD CONSTRAINT `bai_dang_ibfk_3` FOREIGN KEY (`id_bao_cao`) REFERENCES `bao_cao` (`id`),
  ADD CONSTRAINT `bai_dang_ibfk_4` FOREIGN KEY (`id_chu_de`) REFERENCES `chu_de` (`id`);

--
-- Constraints for table `bao_cao`
--
ALTER TABLE `bao_cao`
  ADD CONSTRAINT `bao_cao_ibfk_1` FOREIGN KEY (`id_nhiem_vu`) REFERENCES `nhiem_vu` (`id`),
  ADD CONSTRAINT `bao_cao_ibfk_2` FOREIGN KEY (`id_don_vi`) REFERENCES `don_vi` (`id`);

--
-- Constraints for table `nhiem_vu`
--
ALTER TABLE `nhiem_vu`
  ADD CONSTRAINT `nhiem_vu_ibfk_1` FOREIGN KEY (`id_noi_dung`) REFERENCES `noi_dung` (`id`),
  ADD CONSTRAINT `nhiem_vu_ibfk_2` FOREIGN KEY (`id_nguoi_giao`) REFERENCES `person` (`id`),
  ADD CONSTRAINT `nhiem_vu_ibfk_3` FOREIGN KEY (`id_tinh_trang`) REFERENCES `tinh_trang` (`id`);

--
-- Constraints for table `person`
--
ALTER TABLE `person`
  ADD CONSTRAINT `person_ibfk_1` FOREIGN KEY (`id_permission`) REFERENCES `permission` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
