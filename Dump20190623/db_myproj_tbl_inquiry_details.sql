-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: localhost    Database: db_myproj
-- ------------------------------------------------------
-- Server version	5.5.52-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_inquiry_details`
--

DROP TABLE IF EXISTS `tbl_inquiry_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_inquiry_details` (
  `inquiry_id` int(11) NOT NULL AUTO_INCREMENT,
  `inquiry_created_date` datetime DEFAULT NULL,
  `inquiry_createdBy` varchar(45) DEFAULT NULL,
  `inquiry_person_email` varchar(45) DEFAULT NULL,
  `inquiry_update_date` datetime DEFAULT NULL,
  `tbl_inquiry_updatedBy` varchar(45) DEFAULT NULL,
  `tbl_inquiry_productName` varchar(45) DEFAULT NULL,
  `tbl_inquiry_productCost` int(11) DEFAULT NULL,
  `tbl_inquiry_remarks` varchar(255) DEFAULT NULL,
  `tbl_inquiry_no_of_product` int(11) DEFAULT NULL,
  `tbl_inquiry_order_recd_date` datetime DEFAULT NULL,
  `tbl_inquiry_order_status` varchar(45) DEFAULT NULL,
  `tbl_inquiry_is_inquiry` int(11) DEFAULT NULL,
  `tbl_inquiry_is_approved` int(11) DEFAULT NULL,
  `tbl_inquiry_total_product_cost` int(11) DEFAULT NULL,
  `tbl_inquiry_is_inquiry_rejected` int(11) DEFAULT NULL,
  PRIMARY KEY (`inquiry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_inquiry_details`
--

LOCK TABLES `tbl_inquiry_details` WRITE;
/*!40000 ALTER TABLE `tbl_inquiry_details` DISABLE KEYS */;
INSERT INTO `tbl_inquiry_details` VALUES (102,'2019-06-08 02:05:23','Kundan','keshrikundan666@gmail.com',NULL,NULL,'AC',120000,'kundan',3,'2019-06-08 00:00:00','kundan',0,1,360000,NULL),(103,'2019-06-08 18:57:25','Kundan','keshrikundan666@gmail.com',NULL,NULL,'FAN',1200,'kundan jgkjkgjj',1,'2019-06-10 00:00:00','kundan',0,NULL,1200,1),(104,'2019-06-09 13:47:11','Kundan','keshrikundan666@gmail.com',NULL,NULL,'COOLER',2300,'kundan',1,'2019-06-14 00:00:00','kundan',0,0,2300,1),(105,'2019-06-09 13:48:24','Kundan','keshrikundan666@gmail.com',NULL,NULL,'COOLER',2300,'kundan',4,'2019-06-13 00:00:00','kundan',0,1,9200,NULL),(106,'2019-06-10 00:38:45','Kundan','keshrikundan666@gmail.com',NULL,NULL,'AC',120000,'test',1,'2019-06-13 00:00:00','test',0,NULL,120000,1),(107,'2019-06-10 14:56:14','Kundan','keshrikundan666@gmail.com','2019-06-11 10:41:50','kundan','AC',120000,'kundan',6,'2019-06-09 00:00:00','kundan',0,NULL,720000,1),(108,'2019-06-10 14:57:23','Kundan','keshrikundan666@gmail.com','2019-06-11 00:10:48','kundan','AC',120000,'',3,'2019-06-20 00:00:00','',0,1,360000,NULL),(109,'2019-06-10 15:03:31','Kundan','keshrikundan666@gmail.com',NULL,NULL,'AC',120000,'',1,'2019-06-10 00:00:00','',0,NULL,120000,1),(110,'2019-06-10 16:16:33','Kundan','keshrikundan666@gmail.com','2019-06-10 23:20:54','kundan','FAN',1200,'kundan',6,'2019-06-09 00:00:00','kundan',0,NULL,7200,1),(111,'2019-06-10 16:46:25','Kundan','keshrikundan666@gmail.com','2019-06-18 17:15:52','kundan','FAN',1200,'Keshri',6,'2019-06-07 00:00:00','kundan',1,NULL,7200,NULL),(112,'2019-06-10 23:33:52','Kundan','keshrikundan666@gmail.com','2019-06-10 23:48:09','kundan','AC',120000,'kundan',4,'2019-06-08 00:00:00','teteteccwq',0,NULL,480000,1),(113,'2019-06-11 00:12:14','Kundan','keshrikundan666@gmail.com',NULL,NULL,'AC',120000,'',1,'2019-06-13 00:00:00','',0,NULL,120000,1),(114,'2019-06-11 00:16:32','Kundan','keshrikundan666@gmail.com',NULL,NULL,'AC',120000,'kundan',1,'2019-06-10 00:00:00','kundan',0,NULL,120000,1),(115,'2019-06-11 00:17:32','Kundan','keshrikundan666@gmail.com','2019-06-11 00:17:46','kundan','AC',120000,'kundan',7,'2019-06-20 00:00:00','kundan',1,NULL,840000,NULL),(116,'2019-06-11 00:18:44','Kundan','keshrikundan666@gmail.com',NULL,NULL,'COOLER',2300,'kundan',7,'2019-06-21 00:00:00','kundan',1,NULL,16100,NULL),(117,'2019-06-11 11:29:27','Kundan','keshrikundan666@gmail.com','2019-06-11 11:29:46','kundan','COOLER',2300,'kundan',4,'2019-06-13 00:00:00','kundan',0,1,9200,NULL),(118,'2019-06-18 17:15:06','Kundan','keshrikundan666@gmail.com',NULL,NULL,'FAN',1200,'TEST',4,'2019-06-18 00:00:00','TEST',1,NULL,4800,NULL);
/*!40000 ALTER TABLE `tbl_inquiry_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-23 21:38:54
