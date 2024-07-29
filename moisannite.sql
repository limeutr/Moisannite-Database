-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2024 at 05:02 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moissanite`
--

-- --------------------------------------------------------

--
-- Table structure for table `moisannite`
--

CREATE TABLE `moisannite` (
  `id` int(11) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `moisannite`
--

INSERT INTO `moisannite` (`id`, `filename`, `description`, `created_at`, `updated_at`) VALUES
(18, 'image-1720967321997.jpg', '<3', '2024-07-14 14:27:45', '2024-07-14 14:27:45'),
(19, 'image-1720967276845.jpg', 'Yes', '2024-07-14 14:27:56', '2024-07-14 14:27:56'),
(20, 'image-1720967285965.jpg', '', '2024-07-14 14:28:05', '2024-07-14 14:28:05'),
(21, 'image-1720967295231.jpg', '', '2024-07-14 14:28:15', '2024-07-14 14:28:15'),
(22, 'image-1720967303613.jpg', '', '2024-07-14 14:28:23', '2024-07-14 14:28:23'),
(23, 'image-1720969302568.jpg', 'Best girl', '2024-07-14 15:01:42', '2024-07-14 15:01:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `moisannite`
--
ALTER TABLE `moisannite`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `moisannite`
--
ALTER TABLE `moisannite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
