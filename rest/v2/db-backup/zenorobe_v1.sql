-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2024 at 06:08 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zenorobe_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `zenorobe_category`
--

CREATE TABLE `zenorobe_category` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_title` varchar(30) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `zenorobe_category`
--

INSERT INTO `zenorobe_category` (`category_aid`, `category_is_active`, `category_title`, `category_datetime`, `category_created`) VALUES
(1, 1, 'Tshirt', '', 0),
(2, 1, '123', '2024-12-13 11:16:56', 2024),
(3, 1, '123', '2024-12-13 11:26:07', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `zenorobe_clothes`
--

CREATE TABLE `zenorobe_clothes` (
  `zenorobe_aid` int(11) NOT NULL,
  `zenorobe_is_active` tinyint(1) NOT NULL,
  `zenorobe_image` varchar(20) NOT NULL,
  `zenorobe_title` varchar(30) NOT NULL,
  `zenorobe_price` varchar(20) NOT NULL,
  `zenorobe_category_id` int(11) NOT NULL,
  `zenorobe_datetime` varchar(20) NOT NULL,
  `zenorobe_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `zenorobe_clothes`
--

INSERT INTO `zenorobe_clothes` (`zenorobe_aid`, `zenorobe_is_active`, `zenorobe_image`, `zenorobe_title`, `zenorobe_price`, `zenorobe_category_id`, `zenorobe_datetime`, `zenorobe_created`) VALUES
(1, 1, 'burger-1.webp', 'burger', '40', 1, '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zenorobe_category`
--
ALTER TABLE `zenorobe_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `zenorobe_clothes`
--
ALTER TABLE `zenorobe_clothes`
  ADD PRIMARY KEY (`zenorobe_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zenorobe_category`
--
ALTER TABLE `zenorobe_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `zenorobe_clothes`
--
ALTER TABLE `zenorobe_clothes`
  MODIFY `zenorobe_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
