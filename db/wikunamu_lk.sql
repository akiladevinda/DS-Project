-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 18, 2019 at 05:43 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 5.6.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wikunamu_lk`
--

-- --------------------------------------------------------

--
-- Table structure for table `wikunamu_ads`
--

CREATE TABLE `wikunamu_ads` (
  `Ad_ID` int(11) NOT NULL,
  `Ad_Category_Name` varchar(20) NOT NULL,
  `Ad_Item_Name` varchar(30) NOT NULL,
  `Ad_Item_Condiiton` varchar(15) NOT NULL,
  `Ad_Title` varchar(30) NOT NULL,
  `Ad_Description` varchar(200) NOT NULL,
  `Ad_City` varchar(20) NOT NULL,
  `Ad_Price` varchar(10) NOT NULL,
  `Ad_Image` varchar(50) NOT NULL,
  `Ad_User_Email` varchar(30) NOT NULL,
  `Ad_User_Unique_ID` varchar(50) NOT NULL,
  `Ad_User_Contact_No` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wikunamu_ads`
--

INSERT INTO `wikunamu_ads` (`Ad_ID`, `Ad_Category_Name`, `Ad_Item_Name`, `Ad_Item_Condiiton`, `Ad_Title`, `Ad_Description`, `Ad_City`, `Ad_Price`, `Ad_Image`, `Ad_User_Email`, `Ad_User_Unique_ID`, `Ad_User_Contact_No`) VALUES
(2, 'Mobile Phone', 'Galaxy S10', 'Brand New', 'Galaxy S10 Sale', 'Call For Details', 'Matara', '200000', 'image.png', 'akila@test.com', '23423432r2r22d', '0711091499'),
(6, 'Electronics', 'S1123', 'Brand New', 'Samsung TV Sale', 'Call for more info', 'Matara', '20000', 'Still Testing', 'akila@gmail.com', '0bf3575814103e87', '119');

-- --------------------------------------------------------

--
-- Table structure for table `wikunamu_users`
--

CREATE TABLE `wikunamu_users` (
  `User_ID` int(11) NOT NULL,
  `User_Full_Name` varchar(50) NOT NULL,
  `User_Email` varchar(50) NOT NULL,
  `User_Password` varchar(100) NOT NULL,
  `User_Contact_No` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wikunamu_users`
--

INSERT INTO `wikunamu_users` (`User_ID`, `User_Full_Name`, `User_Email`, `User_Password`, `User_Contact_No`) VALUES
(2, 'Akila Devidna', 'akila@test.com', 'akila1996', '0711091499'),
(3, 'Dulanjaya Samarajeewa', 'dula@test.com', 'dula1996', '0712345679'),
(5, 'Akila D', 'akila@gmail.com', 'akila1996', '119');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wikunamu_ads`
--
ALTER TABLE `wikunamu_ads`
  ADD PRIMARY KEY (`Ad_ID`);

--
-- Indexes for table `wikunamu_users`
--
ALTER TABLE `wikunamu_users`
  ADD PRIMARY KEY (`User_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wikunamu_ads`
--
ALTER TABLE `wikunamu_ads`
  MODIFY `Ad_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `wikunamu_users`
--
ALTER TABLE `wikunamu_users`
  MODIFY `User_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
