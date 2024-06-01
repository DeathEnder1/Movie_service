CREATE DATABASE  IF NOT EXISTS `movie_service` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `movie_service`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: movie_service
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL,
  `titleimg` varchar(255) DEFAULT NULL,
  `bgimg` varchar(255) DEFAULT NULL,
  `previewimg` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `year` varchar(4) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `agelimit` varchar(10) DEFAULT NULL,
  `length` varchar(10) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `description` text,
  `active` tinyint(1) DEFAULT NULL,
  `video2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'../assets/movies/transformer-title.png','../assets/movies/bg-transformer.jpg','../assets/movies/transformer.jpg','https://www.youtube.com/embed/TxPNrwbuxN0','Transformer 3','2023','18th September','15+','2h 07min','Adventure','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',1,'https://drive.google.com/file/d/13O65DpiEq5PU3nUaKesUxImyrw9Knc-B/view?usp=drive_link'),(2,'../assets/movies/meg-2-title.png','../assets/movies/bg-meg-2.jpeg','../assets/movies/meg-2.jpg','https://www.youtube.com/embed/dG91B3hHyY4','Meg 2','2023','04th August','16+','1h 56min','Thriller','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/13O65DpiEq5PU3nUaKesUxImyrw9Knc-B/view?usp=drive_link'),(3,'../assets/movies/fast-x-title.png','../assets/movies/bg-fast-x.jpeg','../assets/movies/fast-x.jpeg','https://www.youtube.com/embed/32RAq6JzY-w','Fast X','2023','04th October','12+','2h 21min','Action','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/1wE7xyix4utfIkiK_8UUjv7VVmKF2yIKz/view?usp=drive_link'),(4,'../assets/movies/jailer-title.png','../assets/movies/bg-jailer.jpeg','../assets/movies/jailer.jpg','https://www.youtube.com/embed/lshAqOT7BB8','Jailer','2023','09th November','15+','2h 48min','Action','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/13O65DpiEq5PU3nUaKesUxImyrw9Knc-B/view?usp=drive_link'),(5,'../assets/movies/beautiful-disaster-title.png','../assets/movies/bg-beautiful-disaster.jpeg','../assets/movies/beautiful-disaster.jpeg','https://www.youtube.com/embed/nvaenzyXl4o','Beautiful Disaster','2023','12th November','12+','1h 45min','Romance','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/13O65DpiEq5PU3nUaKesUxImyrw9Knc-B/view?usp=drive_link'),(6,'../assets/movies/ape-title.png','../assets/movies/bg-ape.jpeg','../assets/movies/ape.jpg','https://www.youtube.com/embed/dtyPh5yCoWg','Ape vs. Mecha Ape','2023','30th December','14+','2h 45min','Thriller','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/1sOeXWeO-niYRdTEbmcmFCEJHhJDcZotS/view?usp=drive_link'),(8,'../assets/movies/no-hard-feelings-title.png','../assets/movies/bg-no-hard-feelings.jpeg','../assets/movies/no-hard-feelings.jpeg','https://www.youtube.com/embed/7psP7xBEa28','No Hard Feelings','2023','06th October','14+','1h 43min','Romance','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/13O65DpiEq5PU3nUaKesUxImyrw9Knc-B/view?usp=drive_link'),(9,'../assets/movies/peter-pan-and-wendy-title.png','../assets/movies/bg-peter-pan-and-wendy.jpeg','../assets/movies/peter-pan-and-wendy.jpg','https://www.youtube.com/embed/9Ji5U2sTlLU','Peter Pan & Wendy','2023','14th October','12+','1h 49min','Adventure','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/13O65DpiEq5PU3nUaKesUxImyrw9Knc-B/view?usp=drive_link'),(10,'../assets/movies/heart-of-stone-title.png','../assets/movies/bg-heart-of-stone.jpeg','../assets/movies/heart-of-stone.jpg','https://www.youtube.com/embed/XuDwndGaCFo','Heart of Stone','2023','09th November','15+','2h 02min','Action','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/13O65DpiEq5PU3nUaKesUxImyrw9Knc-B/view?usp=drive_link');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-01 18:02:11
