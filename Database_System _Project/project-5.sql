-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 28, 2023 at 03:32 PM
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
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `blacklist`
--

CREATE TABLE `blacklist` (
  `cust_id` int(11) NOT NULL,
  `end_dae` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `showtime_id` varchar(100) NOT NULL,
  `cust_id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `seat_no` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `branch`
--

CREATE TABLE `branch` (
  `branch_id` varchar(20) NOT NULL,
  `branch_location` varchar(50) NOT NULL,
  `cinema_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `branch`
--

INSERT INTO `branch` (`branch_id`, `branch_location`, `cinema_id`) VALUES
('majorfu', 'Future Rangsit', 'maj2');

-- --------------------------------------------------------

--
-- Table structure for table `cinema`
--

CREATE TABLE `cinema` (
  `cinema_id` varchar(20) NOT NULL,
  `cinema_name` varchar(100) NOT NULL,
  `cinema_cont` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cinema`
--

INSERT INTO `cinema` (`cinema_id`, `cinema_name`, `cinema_cont`) VALUES
('maj2', 'Major Cineplex', 'Tel.021111234');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `cust_id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `useremail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `regdate` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`cust_id`, `fullname`, `username`, `useremail`, `password`, `regdate`) VALUES
(2, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:16:01'),
(3, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:18:26'),
(4, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:19:59'),
(5, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:20:41'),
(6, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:22:15'),
(7, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:23:48'),
(8, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:25:43'),
(9, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:30:34'),
(10, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:32:40'),
(11, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:33:20'),
(12, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:33:55'),
(13, 'aa', 'aa', 'aa@gmail.com', '6226f7cbe59e99a90b5cef6f94f966fd', '2023-05-28 09:35:51'),
(14, 'aa', 'aa', 'aa@gmail.com', '03c7c0ace395d80182db07ae2c30f034', '2023-05-28 09:37:42'),
(15, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:38:10'),
(16, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:39:02'),
(17, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:40:12'),
(18, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:40:32'),
(19, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:41:04'),
(20, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:41:16'),
(21, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 09:41:30'),
(22, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 10:04:41'),
(23, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 13:16:05'),
(24, 'aa', 'aa', 'aa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', '2023-05-28 13:23:21');

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `movie_id` varchar(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `movie_length` varchar(50) DEFAULT NULL,
  `shortstory` text DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `images` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`movie_id`, `title`, `movie_length`, `shortstory`, `category`, `images`) VALUES
('11211234', 'Doctor Strange\r\nin the Multiverse of Madness', '126mins', 'Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse, including alternate versions of...', 'Action', 'images/v38_575.png'),
('11211235', 'Wednesday', NULL, NULL, NULL, 'images/large-img1.jpg'),
('11211236', 'Lupin', NULL, NULL, NULL, 'images/large-img2.jpg'),
('11211237', 'Queen\'s Gambit', NULL, NULL, NULL, 'images/large-img3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `seat`
--

CREATE TABLE `seat` (
  `seat_no` varchar(50) NOT NULL,
  `theater_id` varchar(20) NOT NULL,
  `seat_name` varchar(50) DEFAULT NULL,
  `seat_cost` varchar(20) DEFAULT NULL,
  `seat_status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seat`
--

INSERT INTO `seat` (`seat_no`, `theater_id`, `seat_name`, `seat_cost`, `seat_status`) VALUES
('A1', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A10', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A11', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A12', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A13', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A14', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A15', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A2', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A3', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A4', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A5', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A6', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A7', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A8', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('A9', 'THEARTRE 1', 'Honeymoon', '280฿', NULL),
('B1', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B10', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B11', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B12', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B13', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B14', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B15', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B2', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B3', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B4', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B5', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B6', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B7', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B8', 'THEARTRE 1', 'Normal', '200฿', NULL),
('B9', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C1', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C10', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C11', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C12', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C13', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C14', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C15', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C2', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C3', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C4', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C5', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C6', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C7', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C8', 'THEARTRE 1', 'Normal', '200฿', NULL),
('C9', 'THEARTRE 1', 'Normal', '200฿', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `shows`
--

CREATE TABLE `shows` (
  `showtime_id` varchar(100) NOT NULL,
  `theater_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `shows`
--

INSERT INTO `shows` (`showtime_id`, `theater_id`) VALUES
('Doctor01 110223', 'THEARTRE 1'),
('Doctor01 110224', 'THEARTRE 1');

-- --------------------------------------------------------

--
-- Table structure for table `showtime`
--

CREATE TABLE `showtime` (
  `showtime_id` varchar(100) NOT NULL,
  `movie_id` varchar(20) NOT NULL,
  `show_date` date DEFAULT NULL,
  `show_time` time DEFAULT NULL,
  `audio` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `showtime`
--

INSERT INTO `showtime` (`showtime_id`, `movie_id`, `show_date`, `show_time`, `audio`) VALUES
('Doctor01 110223', '11211234', '2023-04-23', '16:00:00', 'TH'),
('Doctor01 110224', '11211234', '2023-04-23', '18:00:00', 'EN');

-- --------------------------------------------------------

--
-- Table structure for table `theater`
--

CREATE TABLE `theater` (
  `theater_id` varchar(20) NOT NULL,
  `theater_name` varchar(100) NOT NULL,
  `branch_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `theater`
--

INSERT INTO `theater` (`theater_id`, `theater_name`, `branch_id`) VALUES
('THEARTRE 1', 'Major Cineplex   Future Rangsit', 'majorfu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blacklist`
--
ALTER TABLE `blacklist`
  ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`showtime_id`,`cust_id`),
  ADD KEY `cust_id` (`cust_id`),
  ADD KEY `seat_no` (`seat_no`);

--
-- Indexes for table `branch`
--
ALTER TABLE `branch`
  ADD PRIMARY KEY (`branch_id`),
  ADD KEY `cinema_id` (`cinema_id`);

--
-- Indexes for table `cinema`
--
ALTER TABLE `cinema`
  ADD PRIMARY KEY (`cinema_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cust_id`);

--
-- Indexes for table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`movie_id`);

--
-- Indexes for table `seat`
--
ALTER TABLE `seat`
  ADD PRIMARY KEY (`seat_no`,`theater_id`),
  ADD KEY `theater_id` (`theater_id`);

--
-- Indexes for table `shows`
--
ALTER TABLE `shows`
  ADD PRIMARY KEY (`showtime_id`,`theater_id`),
  ADD KEY `theater_id` (`theater_id`);

--
-- Indexes for table `showtime`
--
ALTER TABLE `showtime`
  ADD PRIMARY KEY (`showtime_id`),
  ADD KEY `movie_id` (`movie_id`);

--
-- Indexes for table `theater`
--
ALTER TABLE `theater`
  ADD PRIMARY KEY (`theater_id`),
  ADD KEY `branch_id` (`branch_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blacklist`
--
ALTER TABLE `blacklist`
  MODIFY `cust_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `cust_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blacklist`
--
ALTER TABLE `blacklist`
  ADD CONSTRAINT `blacklist_ibfk_1` FOREIGN KEY (`cust_id`) REFERENCES `customer` (`cust_id`);

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`cust_id`) REFERENCES `customer` (`cust_id`),
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`showtime_id`) REFERENCES `showtime` (`showtime_id`),
  ADD CONSTRAINT `booking_ibfk_3` FOREIGN KEY (`cust_id`) REFERENCES `customer` (`cust_id`),
  ADD CONSTRAINT `booking_ibfk_4` FOREIGN KEY (`seat_no`) REFERENCES `seat` (`seat_no`);

--
-- Constraints for table `branch`
--
ALTER TABLE `branch`
  ADD CONSTRAINT `branch_ibfk_1` FOREIGN KEY (`cinema_id`) REFERENCES `cinema` (`cinema_id`);

--
-- Constraints for table `seat`
--
ALTER TABLE `seat`
  ADD CONSTRAINT `seat_ibfk_1` FOREIGN KEY (`theater_id`) REFERENCES `theater` (`theater_id`);

--
-- Constraints for table `shows`
--
ALTER TABLE `shows`
  ADD CONSTRAINT `shows_ibfk_1` FOREIGN KEY (`showtime_id`) REFERENCES `showtime` (`showtime_id`),
  ADD CONSTRAINT `shows_ibfk_2` FOREIGN KEY (`theater_id`) REFERENCES `theater` (`theater_id`),
  ADD CONSTRAINT `shows_ibfk_3` FOREIGN KEY (`showtime_id`) REFERENCES `showtime` (`showtime_id`),
  ADD CONSTRAINT `shows_ibfk_4` FOREIGN KEY (`theater_id`) REFERENCES `theater` (`theater_id`),
  ADD CONSTRAINT `shows_ibfk_5` FOREIGN KEY (`showtime_id`) REFERENCES `showtime` (`showtime_id`),
  ADD CONSTRAINT `shows_ibfk_6` FOREIGN KEY (`theater_id`) REFERENCES `theater` (`theater_id`),
  ADD CONSTRAINT `shows_ibfk_7` FOREIGN KEY (`showtime_id`) REFERENCES `showtime` (`showtime_id`),
  ADD CONSTRAINT `shows_ibfk_8` FOREIGN KEY (`theater_id`) REFERENCES `theater` (`theater_id`);

--
-- Constraints for table `showtime`
--
ALTER TABLE `showtime`
  ADD CONSTRAINT `showtime_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`movie_id`),
  ADD CONSTRAINT `showtime_ibfk_2` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`movie_id`),
  ADD CONSTRAINT `showtime_ibfk_3` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`movie_id`),
  ADD CONSTRAINT `showtime_ibfk_4` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`movie_id`);

--
-- Constraints for table `theater`
--
ALTER TABLE `theater`
  ADD CONSTRAINT `theater_ibfk_1` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`branch_id`),
  ADD CONSTRAINT `theater_ibfk_2` FOREIGN KEY (`branch_id`) REFERENCES `branch` (`branch_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
