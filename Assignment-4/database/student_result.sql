-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2026 at 10:57 AM
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
-- Database: `student_result`
--

-- --------------------------------------------------------

--
-- Table structure for table `marks`
--

CREATE TABLE `marks` (
  `id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `mse` int(11) NOT NULL,
  `ese` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `marks`
--

INSERT INTO `marks` (`id`, `student_id`, `subject`, `mse`, `ese`) VALUES
(1, 1, 'DAA', 25, 58),
(2, 1, 'CN', 27, 61),
(3, 1, 'ARVR', 24, 55),
(4, 1, 'WT', 26, 63),
(5, 2, 'DAA', 24, 57),
(6, 2, 'CN', 26, 60),
(7, 2, 'ARVR', 25, 58),
(8, 2, 'WT', 27, 61),
(9, 3, 'DAA', 28, 64),
(10, 3, 'CN', 25, 59),
(11, 3, 'ARVR', 27, 62),
(12, 3, 'WT', 26, 60),
(13, 4, 'DAA', 22, 55),
(14, 4, 'CN', 24, 58),
(15, 4, 'ARVR', 23, 56),
(16, 4, 'WT', 25, 60),
(17, 5, 'DAA', 26, 61),
(18, 5, 'CN', 27, 62),
(19, 5, 'ARVR', 24, 59),
(20, 5, 'WT', 28, 64),
(21, 6, 'DAA', 21, 52),
(22, 6, 'CN', 23, 55),
(23, 6, 'ARVR', 25, 57),
(24, 6, 'WT', 24, 59),
(25, 7, 'DAA', 29, 65),
(26, 7, 'CN', 27, 63),
(27, 7, 'ARVR', 28, 64),
(28, 7, 'WT', 26, 62),
(29, 8, 'DAA', 23, 54),
(30, 8, 'CN', 25, 57),
(31, 8, 'ARVR', 22, 53),
(32, 8, 'WT', 24, 58),
(33, 9, 'DAA', 27, 63),
(34, 9, 'CN', 26, 61),
(35, 9, 'ARVR', 29, 65),
(36, 9, 'WT', 28, 64),
(37, 10, 'DAA', 20, 51),
(38, 10, 'CN', 22, 54),
(39, 10, 'ARVR', 24, 56),
(40, 10, 'WT', 23, 55),
(41, 11, 'DAA', 28, 63),
(42, 11, 'CN', 29, 65),
(43, 11, 'ARVR', 27, 64),
(44, 11, 'WT', 26, 62),
(45, 12, 'DAA', 25, 60),
(46, 12, 'CN', 24, 58),
(47, 12, 'ARVR', 26, 61),
(48, 12, 'WT', 27, 63),
(49, 13, 'DAA', 23, 57),
(50, 13, 'CN', 25, 60),
(51, 13, 'ARVR', 24, 55),
(52, 13, 'WT', 26, 59),
(53, 14, 'DAA', 26, 62),
(54, 14, 'CN', 28, 64),
(55, 14, 'ARVR', 25, 59),
(56, 14, 'WT', 27, 63),
(57, 15, 'DAA', 22, 56),
(58, 15, 'CN', 24, 57),
(59, 15, 'ARVR', 23, 54),
(60, 15, 'WT', 25, 58),
(61, 16, 'DAA', 29, 66),
(62, 16, 'CN', 27, 64),
(63, 16, 'ARVR', 28, 65),
(64, 16, 'WT', 26, 63),
(65, 17, 'DAA', 24, 55),
(66, 17, 'CN', 23, 58),
(67, 17, 'ARVR', 25, 57),
(68, 17, 'WT', 22, 60),
(69, 18, 'DAA', 27, 62),
(70, 18, 'CN', 26, 63),
(71, 18, 'ARVR', 28, 61),
(72, 18, 'WT', 25, 64),
(73, 19, 'DAA', 25, 58),
(74, 19, 'CN', 27, 60),
(75, 19, 'ARVR', 24, 59),
(76, 19, 'WT', 26, 62),
(77, 20, 'DAA', 28, 64),
(78, 20, 'CN', 27, 62),
(79, 20, 'ARVR', 26, 63),
(80, 20, 'WT', 29, 65),
(81, 21, 'DAA', 21, 55),
(82, 21, 'CN', 23, 57),
(83, 21, 'ARVR', 25, 56),
(84, 21, 'WT', 24, 58),
(85, 22, 'DAA', 26, 61),
(86, 22, 'CN', 28, 63),
(87, 22, 'ARVR', 27, 62),
(88, 22, 'WT', 25, 60),
(89, 23, 'DAA', 29, 65),
(90, 23, 'CN', 26, 61),
(91, 23, 'ARVR', 28, 64),
(92, 23, 'WT', 27, 63),
(93, 24, 'DAA', 24, 56),
(94, 24, 'CN', 25, 59),
(95, 24, 'ARVR', 23, 55),
(96, 24, 'WT', 26, 60),
(97, 25, 'DAA', 27, 62),
(98, 25, 'CN', 29, 64),
(99, 25, 'ARVR', 26, 61),
(100, 25, 'WT', 28, 63),
(101, 26, 'DAA', 27, 62),
(102, 26, 'CN', 29, 64),
(103, 26, 'ARVR', 26, 61),
(104, 26, 'WT', 28, 63),
(105, 27, 'DAA', 24, 57),
(106, 27, 'CN', 26, 59),
(107, 27, 'ARVR', 25, 58),
(108, 27, 'WT', 27, 61),
(109, 28, 'DAA', 28, 64),
(110, 28, 'CN', 27, 63),
(111, 28, 'ARVR', 29, 65),
(112, 28, 'WT', 26, 62),
(113, 29, 'DAA', 23, 55),
(114, 29, 'CN', 25, 58),
(115, 29, 'ARVR', 24, 57),
(116, 29, 'WT', 26, 60),
(117, 30, 'DAA', 27, 62),
(118, 30, 'CN', 28, 63),
(119, 30, 'ARVR', 26, 61),
(120, 30, 'WT', 29, 64),
(121, 31, 'DAA', 25, 59),
(122, 31, 'CN', 24, 57),
(123, 31, 'ARVR', 27, 60),
(124, 31, 'WT', 26, 58),
(125, 32, 'DAA', 29, 65),
(126, 32, 'CN', 27, 63),
(127, 32, 'ARVR', 28, 64),
(128, 32, 'WT', 26, 62),
(129, 33, 'DAA', 22, 54),
(130, 33, 'CN', 25, 57),
(131, 33, 'ARVR', 23, 56),
(132, 33, 'WT', 24, 58),
(133, 34, 'DAA', 26, 61),
(134, 34, 'CN', 28, 63),
(135, 34, 'ARVR', 25, 59),
(136, 34, 'WT', 27, 62),
(137, 35, 'DAA', 24, 57),
(138, 35, 'CN', 26, 60),
(139, 35, 'ARVR', 25, 58),
(140, 35, 'WT', 27, 61),
(141, 36, 'DAA', 27, 62),
(142, 36, 'CN', 25, 59),
(143, 36, 'ARVR', 28, 63),
(144, 36, 'WT', 26, 61),
(145, 37, 'DAA', 23, 56),
(146, 37, 'CN', 24, 58),
(147, 37, 'ARVR', 25, 55),
(148, 37, 'WT', 26, 60),
(149, 38, 'DAA', 28, 64),
(150, 38, 'CN', 29, 65),
(151, 38, 'ARVR', 26, 62),
(152, 38, 'WT', 27, 63),
(153, 39, 'DAA', 25, 58),
(154, 39, 'CN', 26, 60),
(155, 39, 'ARVR', 24, 57),
(156, 39, 'WT', 28, 62),
(157, 40, 'DAA', 27, 63),
(158, 40, 'CN', 25, 61),
(159, 40, 'ARVR', 29, 64),
(160, 40, 'WT', 26, 62),
(161, 41, 'DAA', 23, 56),
(162, 41, 'CN', 24, 58),
(163, 41, 'ARVR', 26, 55),
(164, 41, 'WT', 25, 59),
(165, 42, 'DAA', 28, 64),
(166, 42, 'CN', 27, 62),
(167, 42, 'ARVR', 26, 61),
(168, 42, 'WT', 29, 65),
(169, 43, 'DAA', 24, 57),
(170, 43, 'CN', 26, 59),
(171, 43, 'ARVR', 25, 58),
(172, 43, 'WT', 27, 61),
(173, 44, 'DAA', 28, 64),
(174, 44, 'CN', 29, 65),
(175, 44, 'ARVR', 26, 62),
(176, 44, 'WT', 27, 63),
(177, 45, 'DAA', 25, 58),
(178, 45, 'CN', 27, 61),
(179, 45, 'ARVR', 24, 56),
(180, 45, 'WT', 26, 60),
(181, 46, 'DAA', 26, 61),
(182, 46, 'CN', 28, 63),
(183, 46, 'ARVR', 24, 59),
(184, 46, 'WT', 25, 62),
(185, 47, 'DAA', 22, 55),
(186, 47, 'CN', 24, 58),
(187, 47, 'ARVR', 23, 54),
(188, 47, 'WT', 26, 60),
(189, 48, 'DAA', 29, 65),
(190, 48, 'CN', 27, 64),
(191, 48, 'ARVR', 28, 63),
(192, 48, 'WT', 26, 61),
(193, 49, 'DAA', 25, 58),
(194, 49, 'CN', 23, 57),
(195, 49, 'ARVR', 26, 59),
(196, 49, 'WT', 24, 56),
(197, 50, 'DAA', 27, 62),
(198, 50, 'CN', 29, 64),
(199, 50, 'ARVR', 26, 61),
(200, 50, 'WT', 28, 63),
(201, 51, 'DAA', 25, 58),
(202, 51, 'CN', 23, 57),
(203, 51, 'ARVR', 26, 59),
(204, 51, 'WT', 24, 56),
(205, 52, 'DAA', 27, 62),
(206, 52, 'CN', 29, 64),
(207, 52, 'ARVR', 26, 61),
(208, 52, 'WT', 28, 63),
(209, 53, 'DAA', 24, 57),
(210, 53, 'CN', 26, 59),
(211, 53, 'ARVR', 25, 58),
(212, 53, 'WT', 27, 61),
(213, 54, 'DAA', 28, 64),
(214, 54, 'CN', 27, 63),
(215, 54, 'ARVR', 29, 65),
(216, 54, 'WT', 26, 62),
(217, 55, 'DAA', 23, 55),
(218, 55, 'CN', 25, 58),
(219, 55, 'ARVR', 24, 57),
(220, 55, 'WT', 26, 60),
(221, 56, 'DAA', 27, 62),
(222, 56, 'CN', 28, 63),
(223, 56, 'ARVR', 26, 61),
(224, 56, 'WT', 29, 64),
(225, 57, 'DAA', 25, 59),
(226, 57, 'CN', 24, 57),
(227, 57, 'ARVR', 27, 60),
(228, 57, 'WT', 26, 58),
(229, 58, 'DAA', 29, 65),
(230, 58, 'CN', 27, 63),
(231, 58, 'ARVR', 28, 64),
(232, 58, 'WT', 26, 62),
(233, 59, 'DAA', 22, 54),
(234, 59, 'CN', 25, 57),
(235, 59, 'ARVR', 23, 56),
(236, 59, 'WT', 24, 58),
(237, 60, 'DAA', 26, 61),
(238, 60, 'CN', 28, 64),
(239, 60, 'ARVR', 25, 59),
(240, 60, 'WT', 27, 63),
(241, 61, 'DAA', 24, 57),
(242, 61, 'CN', 26, 60),
(243, 61, 'ARVR', 27, 61),
(244, 61, 'WT', 25, 59),
(245, 62, 'DAA', 28, 63),
(246, 62, 'CN', 29, 65),
(247, 62, 'ARVR', 26, 62),
(248, 62, 'WT', 27, 64),
(249, 63, 'DAA', 23, 56),
(250, 63, 'CN', 24, 58),
(251, 63, 'ARVR', 25, 55),
(252, 63, 'WT', 26, 60),
(253, 64, 'DAA', 27, 63),
(254, 64, 'CN', 26, 61),
(255, 64, 'ARVR', 28, 64),
(256, 64, 'WT', 29, 65),
(257, 65, 'DAA', 25, 58),
(258, 65, 'CN', 27, 60),
(259, 65, 'ARVR', 24, 57),
(260, 65, 'WT', 26, 61),
(261, 66, 'DAA', 28, 64),
(262, 66, 'CN', 25, 59),
(263, 66, 'ARVR', 27, 62),
(264, 66, 'WT', 26, 60),
(265, 67, 'DAA', 24, 57),
(266, 67, 'CN', 26, 61),
(267, 67, 'ARVR', 23, 55),
(268, 67, 'WT', 28, 63),
(269, 68, 'DAA', 29, 65),
(270, 68, 'CN', 27, 64),
(271, 68, 'ARVR', 26, 61),
(272, 68, 'WT', 28, 63),
(273, 69, 'DAA', 22, 55),
(274, 69, 'CN', 24, 57),
(275, 69, 'ARVR', 25, 56),
(276, 69, 'WT', 23, 58),
(277, 70, 'DAA', 26, 60),
(278, 70, 'CN', 28, 63),
(279, 70, 'ARVR', 27, 61),
(280, 70, 'WT', 25, 59),
(281, 71, 'DAA', 23, 56),
(282, 71, 'CN', 25, 58),
(283, 71, 'ARVR', 24, 57),
(284, 71, 'WT', 26, 60),
(285, 72, 'DAA', 27, 62),
(286, 72, 'CN', 26, 60),
(287, 72, 'ARVR', 28, 63),
(288, 72, 'WT', 25, 59),
(289, 73, 'DAA', 24, 57),
(290, 73, 'CN', 27, 61),
(291, 73, 'ARVR', 25, 58),
(292, 73, 'WT', 28, 63),
(293, 74, 'DAA', 29, 65),
(294, 74, 'CN', 26, 62),
(295, 74, 'ARVR', 27, 64),
(296, 74, 'WT', 28, 63),
(297, 75, 'DAA', 25, 59),
(298, 75, 'CN', 24, 57),
(299, 75, 'ARVR', 26, 60),
(300, 75, 'WT', 27, 61),
(301, 76, 'DAA', 28, 64),
(302, 76, 'CN', 27, 63),
(303, 76, 'ARVR', 29, 65),
(304, 76, 'WT', 26, 62),
(305, 77, 'DAA', 23, 56),
(306, 77, 'CN', 25, 58),
(307, 77, 'ARVR', 24, 57),
(308, 77, 'WT', 26, 59),
(309, 78, 'DAA', 27, 63),
(310, 78, 'CN', 28, 64),
(311, 78, 'ARVR', 26, 62),
(312, 78, 'WT', 29, 65);

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `prn` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `branch` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `prn`, `name`, `branch`) VALUES
(1, '12414226', 'Aarhan Goswami', 'Computer Engineering'),
(2, '12413277', 'Anay Abhyankar', 'Computer Engineering'),
(3, '12414517', 'Aditya Raj Tripathi', 'Computer Engineering'),
(4, '12414222', 'Anvay Bahadur', 'Computer Engineering'),
(5, '12410276', 'Abhay Raju Gunjal', 'Computer Engineering'),
(6, '12412022', 'Abhishek Eknath Jadhav', 'Computer Engineering'),
(7, '12413624', 'Hrishikesh Sanjay Adep', 'Computer Engineering'),
(8, '12410228', 'Prem Amit Ashtekar', 'Computer Engineering'),
(9, '12414100', 'Aarav Kulkarni', 'Computer Engineering'),
(10, '12410342', 'Aditya Anand', 'Computer Engineering'),
(11, '12413412', 'Ananya Choudhari', 'Computer Engineering'),
(12, '12414120', 'Arya Bharat Patil', 'Computer Engineering'),
(13, '12412183', 'Aayush Rajesh Pathrabe', 'Computer Engineering'),
(14, '12410249', 'Aditya Arun Parit', 'Computer Engineering'),
(15, '12411688', 'Aditya Bajirao Shermale', 'Computer Engineering'),
(16, '12414010', 'Aditya Mukund Pathak', 'Computer Engineering'),
(17, '12411799', 'Adarsh Lone', 'Computer Engineering'),
(18, '12410320', 'Gayatri Dhanaji Aiwale', 'Computer Engineering'),
(19, '12411185', 'Aditya Chakradhar Ambhore', 'Computer Engineering'),
(20, '12414593', 'Radhika Mukund Anchawale', 'Computer Engineering'),
(21, '12414221', 'Achintyaa Dinesh', 'Computer Engineering'),
(22, '12410948', 'Asmit Bhorade', 'Computer Engineering'),
(23, '12414522', 'Aniruddha Ghosh', 'Computer Engineering'),
(24, '12412401', 'Adhiraj Patil', 'Computer Engineering'),
(25, '12412513', 'Aditya Subhash Shirse', 'Computer Engineering'),
(26, '12414092', 'Adwaiy Khairnar', 'Computer Engineering'),
(27, '12413380', 'Kanak Agrawal', 'Computer Engineering'),
(28, '12414543', 'Atharv Gaikwad', 'Computer Engineering'),
(29, '12414600', 'Anvit Magadum', 'Computer Engineering'),
(30, '12412367', 'Avishkar Aher', 'Computer Engineering'),
(31, '22310141', 'Nilesh Shewale', 'Computer Engineering'),
(32, '12412576', 'Chetan Agrawal', 'Computer Engineering'),
(33, '12414513', 'Aryan Ketkar', 'Computer Engineering'),
(34, '12410361', 'Shriraj Agarkar', 'Computer Engineering'),
(35, '12410897', 'Manthan Agrawal', 'Computer Engineering'),
(36, '12410100', 'Rishi Agrawal', 'Computer Engineering'),
(37, '12414109', 'Ajaya Nandiyawar', 'Computer Engineering'),
(38, '12412581', 'Ajinkya Ubale', 'Computer Engineering'),
(39, '12410082', 'Abhijeet Ambat', 'Computer Engineering'),
(40, '12412224', 'Ashish Akotkar', 'Computer Engineering'),
(41, '12411993', 'Tanish Alhat', 'Computer Engineering'),
(42, '12414639', 'Nehaan Altekar', 'Computer Engineering'),
(43, '12410602', 'Tejas Amrutkar', 'Computer Engineering'),
(44, '12414642', 'Ananya Kulkarni', 'Computer Engineering'),
(45, '12413414', 'Ayush Andure', 'Computer Engineering'),
(46, '12414980', 'Anushka Khot', 'Computer Engineering'),
(47, '12414999', 'Harshvardhan Patil', 'Computer Engineering'),
(48, '12414079', 'Anvay Anturkar', 'Computer Engineering'),
(49, '12414090', 'Arnav Borde', 'Computer Engineering'),
(50, '12411403', 'Arnav Mahajan', 'Computer Engineering'),
(51, '12410927', 'Vastav Araj', 'Computer Engineering'),
(52, '12415000', 'Krishna Mallawat', 'Computer Engineering'),
(53, '12415001', 'Kaushal Agrawal', 'Computer Engineering'),
(54, '12415002', 'Aayush Rahate', 'Computer Engineering'),
(55, '12414997', 'Aqibe Shaikh', 'Computer Engineering'),
(56, '12410476', 'Aliza Kundal', 'Computer Engineering'),
(57, '12410328', 'Aryan Bhat', 'Computer Engineering'),
(58, '12414994', 'Ankush Kumar', 'Computer Engineering'),
(59, '12414996', 'Afshan Shaikh', 'Computer Engineering'),
(60, '12414101', 'Arjun Ghadge', 'Computer Engineering'),
(61, '12414516', 'Arya Patil', 'Computer Engineering'),
(62, '12411072', 'Aryan Jagtap', 'Computer Engineering'),
(63, '12414610', 'Arka barat', 'Computer Engineering'),
(64, '12410333', 'Aakarshit Gupta', 'Computer Engineering'),
(65, '12414537', 'Aayush Wase', 'Computer Engineering'),
(66, '12414094', 'Aditya Shah', 'Computer Engineering'),
(67, '12410332', 'Aditya Chauhan', 'Computer Engineering'),
(68, '12413610', 'Abhishek Saraf', 'Computer Engineering'),
(69, '12411297', 'Alesha Mulla', 'Computer Engineering'),
(70, '12414587', 'Ritik Arora', 'Computer Engineering'),
(71, '12414614', 'Arya Chavan', 'Computer Engineering'),
(72, '12414074', 'Ajinkya Ghule', 'Computer Engineering'),
(73, '12413618', 'Abhinavparth Kumar', 'Computer Engineering'),
(74, '12413247', 'Atharva Dhamdhere', 'Computer Engineering'),
(75, '12414562', 'Archit Boraste', 'Computer Engineering'),
(76, '12414083', 'Anirudh Abhisheki', 'Computer Engineering'),
(77, '12410341', 'Abijit Khajuria', 'Computer Engineering'),
(78, '12414224', 'Atharva Deshmukh', 'Computer Engineering');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `marks`
--
ALTER TABLE `marks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `prn` (`prn`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `marks`
--
ALTER TABLE `marks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=313;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `marks`
--
ALTER TABLE `marks`
  ADD CONSTRAINT `marks_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
