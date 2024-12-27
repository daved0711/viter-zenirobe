-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2024 at 01:40 AM
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
-- Database: `zenorobe_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `clothes`
--

CREATE TABLE `clothes` (
  `clothes_aid` int(11) NOT NULL,
  `clothes_is_active` tinyint(1) NOT NULL,
  `clothes_image` varchar(40) NOT NULL,
  `clothes_image2` varchar(50) NOT NULL,
  `clothes_title` varchar(40) NOT NULL,
  `clothes_category_id` int(11) NOT NULL,
  `clothes_price` varchar(40) NOT NULL,
  `clothes_datetime` varchar(30) NOT NULL,
  `clothes_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clothes`
--

INSERT INTO `clothes` (`clothes_aid`, `clothes_is_active`, `clothes_image`, `clothes_image2`, `clothes_title`, `clothes_category_id`, `clothes_price`, `clothes_datetime`, `clothes_created`) VALUES
(81, 1, 'na-card-b2.jpg', 'na-card-a2.jpg', 'try2', 6, '34343', '2024-12-13 15:48:01', 2024),
(82, 1, 'na-card-f1.jpg', 'na-card-d2.jpg', '53453', 4, '5354', '2024-12-13 15:48:38', 2024),
(83, 1, 'na-card-a1.jpg', 'na-card-a2.jpg', '54544', 4, '4334', '2024-12-13 15:49:01', 2024),
(84, 1, 'na-card-a2.jpg', 'na-card-a1.jpg', 'Summer 1', 8, '231', '2024-12-27 07:48:06', 2024),
(85, 1, 'na-card-b1.jpg', 'na-card-b2.jpg', 'Summer 2', 8, '454', '2024-12-27 07:48:35', 2024),
(86, 1, 'na-card-c1.jpg', 'na-card-c2.jpg', 'Summer 3', 8, '541', '2024-12-27 08:04:15', 2024),
(87, 1, 'na-card-d1.jpg', 'na-card-d2.jpg', 'Summer 4', 8, '564', '2024-12-27 08:05:12', 2024),
(88, 1, 'na-card-e1.jpg', 'na-card-e2.jpg', 'Summer 5', 8, '236', '2024-12-27 08:05:34', 2024),
(89, 1, 'na-card-f1.jpg', 'na-card-f2.jpg', 'Summer 6', 8, '258', '2024-12-27 08:06:32', 2024),
(90, 1, 'na-card-g1.jpg', 'na-card-g2.jpg', 'Summer 7', 8, '645', '2024-12-27 08:07:25', 2024),
(91, 1, 'na-card-h1.jpg', 'na-card-h2.jpg', 'Summer 8', 8, '664', '2024-12-27 08:07:58', 2024),
(92, 1, 'na-card-i1.jpg', 'na-card-i2.jpg', 'Summer 9', 8, '646', '2024-12-27 08:08:21', 2024),
(93, 1, 'na-card-j1.jpg', 'na-card-j2.jpg', 'Summer 11', 8, '654', '2024-12-27 08:10:09', 2024),
(94, 1, 'na-card-k1.jpg', 'na-card-k2.jpg', 'Clothes 12', 8, '456', '2024-12-27 08:12:26', 2024),
(95, 1, 'na-card-l1.jpg', 'na-card-l2.jpg', 'Summer 13', 8, '645', '2024-12-27 08:12:47', 2024),
(96, 1, 'wc-card-a1.jpg', 'wc-card-a2.jpg', 'Winter 1', 7, '535', '2024-12-27 08:18:53', 2024),
(97, 1, 'wc-card-b1.jpg', 'wc-card-b2.jpg', 'Winter 2', 7, '547', '2024-12-27 08:19:12', 2024),
(98, 1, 'wc-card-c1.jpg', 'wc-card-c2.jpg', 'Winter 3', 7, '457', '2024-12-27 08:19:33', 2024),
(99, 1, 'wc-card-d1.jpg', 'wc-card-d2.jpg', 'Winter 4', 7, '345', '2024-12-27 08:19:55', 2024),
(100, 1, 'wc-card-e1.jpg', 'wc-card-e2.jpg', 'Winter 5', 7, '554', '2024-12-27 08:28:31', 2024),
(101, 1, 'wc-card-f1.jpg', 'wc-card-f2.jpg', 'Winter 6', 7, '434', '2024-12-27 08:29:27', 2024),
(102, 1, 'wc-card-g1.jpg', 'wc-card-g2.jpg', 'Winter 7', 7, '434', '2024-12-27 08:31:51', 2024),
(103, 1, 'wc-card-h1.jpg', 'wc-card-h2.jpg', 'Winter 8', 7, '645', '2024-12-27 08:32:23', 2024),
(104, 1, 'wc-card-i1.jpg', 'wc-card-i2.jpg', 'Winter 9', 7, '423', '2024-12-27 08:34:30', 2024),
(105, 1, 'wc-card-j1.jpg', 'wc-card-j2.jpg', 'Winter 10', 7, '439', '2024-12-27 08:34:58', 2024),
(106, 1, 'wc-card-l1.jpg', 'wc-card-l2.jpg', 'Winter 11', 7, '423', '2024-12-27 08:35:19', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `clothes_banner`
--

CREATE TABLE `clothes_banner` (
  `banner_aid` int(11) NOT NULL,
  `banner_is_active` tinyint(1) NOT NULL,
  `banner_image` varchar(40) NOT NULL,
  `banner_title` varchar(50) NOT NULL,
  `banner_subtitle` varchar(40) NOT NULL,
  `banner_datetime` varchar(30) NOT NULL,
  `banner_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clothes_banner`
--

INSERT INTO `clothes_banner` (`banner_aid`, `banner_is_active`, `banner_image`, `banner_title`, `banner_subtitle`, `banner_datetime`, `banner_created`) VALUES
(8, 1, 'slide-1.jpg', 'Latest Trends', 'Choose Your Own Style', '2024-12-27 07:44:57', 2024),
(9, 1, 'slide-2.jpg', 'Top 10 Most Picked Products', 'All Styles Are Included', '2024-12-27 07:46:28', 2024),
(10, 1, 'slide-3.jpg', 'Best for Occations', 'Choose What Suits You', '2024-12-27 07:47:32', 2024);

-- --------------------------------------------------------

--
-- Table structure for table `clothes_category`
--

CREATE TABLE `clothes_category` (
  `category_aid` int(11) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_title` varchar(30) NOT NULL,
  `category_datetime` varchar(30) NOT NULL,
  `category_created` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `clothes_category`
--

INSERT INTO `clothes_category` (`category_aid`, `category_is_active`, `category_title`, `category_datetime`, `category_created`) VALUES
(7, 1, 'Winter', '2024-12-27 07:42:31', 2024),
(8, 1, 'Summer', '2024-12-27 07:42:37', 2024),
(9, 1, 'Streetwear', '2024-12-27 07:42:57', 2024),
(10, 1, 'Classic', '2024-12-27 07:43:10', 2024),
(11, 1, 'Old Money', '2024-12-27 07:43:26', 2024),
(12, 1, 'Y2K', '2024-12-27 07:43:40', 2024);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clothes`
--
ALTER TABLE `clothes`
  ADD PRIMARY KEY (`clothes_aid`);

--
-- Indexes for table `clothes_banner`
--
ALTER TABLE `clothes_banner`
  ADD PRIMARY KEY (`banner_aid`);

--
-- Indexes for table `clothes_category`
--
ALTER TABLE `clothes_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clothes`
--
ALTER TABLE `clothes`
  MODIFY `clothes_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `clothes_banner`
--
ALTER TABLE `clothes_banner`
  MODIFY `banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `clothes_category`
--
ALTER TABLE `clothes_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
