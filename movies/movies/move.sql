DROP TABLE IF EXISTS `movie_genres`;

CREATE TABLE `movie_genres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movieid` int DEFAULT NULL,
  `genre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `movie_id` (`movieid`),
  CONSTRAINT `movie_genres_ibfk_1` FOREIGN KEY (`movieid`) REFERENCES `movies` (`id`)
) 

--
-- Dumping data for table `movie_genres`
--



INSERT INTO `movie_genres` VALUES (341,1,'Animation'),(342,1,'Action'),(343,1,'Adventure'),(344,1,'Comedy'),(345,1,'Family'),(346,3,'Science Fiction'),(347,3,'Horror'),(348,3,'Comedy'),(349,4,'Fantasy'),(350,4,'Action'),(351,4,'Adventure'),(352,5,'Fantasy'),(353,5,'Action'),(354,5,'Science Fiction'),(355,6,'Fantasy'),(356,6,'Action'),(357,6,'Science Fiction'),(358,6,'Adventure'),(359,7,'Fantasy'),(360,7,'Family'),(361,7,'Comedy'),(362,8,'Action'),(363,8,'Adventure'),(364,8,'Science Fiction'),(365,9,'Family'),(366,9,'Adventure'),(367,9,'Science Fiction'),(368,9,'Animation'),(369,10,'Action'),(370,10,'Drama'),(371,10,'History');


DROP TABLE IF EXISTS `movies`;

CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titleimg` varchar(512) DEFAULT NULL,
  `bgimg` varchar(512) DEFAULT NULL,
  `previewimg` varchar(512) DEFAULT NULL,
  `video` varchar(512) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `agelimit` varchar(50) DEFAULT NULL,
  `length` varchar(50) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  `active` int DEFAULT NULL,
  `video2` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 





INSERT INTO `movies` VALUES (1,'../assets/movies/transformer-title.png','../assets/movies/bg-transformer.jpg','../assets/movies/transformer.jpg','https://www.youtube.com/embed/TxPNrwbuxN0','Transformer',2023,'18th September','15+','2h 07min','Adventure','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',1,'https://drive.google.com/file/d/13O65DpiEq5PU3nUaKesUxImyrw9Knc-B/view?usp=drive_link'),(3,'../assets/movies/fast-x-title.png','../assets/movies/bg-fast-x.jpeg','../assets/movies/fast-x.jpeg','https://www.youtube.com/embed/32RAq6JzY-w','Fast X',2023,'04th October','12+','2h 21min','Action','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/1wE7xyix4utfIkiK_8UUjv7VVmKF2yIKz/view?usp=drive_link'),(4,'../assets/movies/jailer-title.png','../assets/movies/bg-jailer.jpeg','../assets/movies/jailer.jpg','https://www.youtube.com/embed/lshAqOT7BB8','Jailer',2023,'09th November','15+','2h 48min','Action','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/1sOeXWeO-niYRdTEbmcmFCEJHhJDcZotS/view?usp=drive_link'),(5,'../assets/movies/beautiful-disaster-title.png','../assets/movies/bg-beautiful-disaster.jpeg','../assets/movies/beautiful-disaster.jpeg','https://www.youtube.com/embed/nvaenzyXl4o','Beautiful Disaster',2023,'12th November','12+','1h 45min','Romance','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/1sOeXWeO-niYRdTEbmcmFCEJHhJDcZotS/view?usp=drive_link'),(6,'../assets/movies/ape-title.png','../assets/movies/bg-ape.jpeg','../assets/movies/ape.jpg','https://www.youtube.com/embed/dtyPh5yCoWg','Ape vs. Mecha Ape',2023,'30th December','14+','2h 45min','Thriller','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/1sOeXWeO-niYRdTEbmcmFCEJHhJDcZotS/view?usp=drive_link'),(7,'../assets/movies/assassin-title.png','../assets/movies/bg-assassin.jpg','../assets/movies/assassin.jpg','https://www.youtube.com/embed/qiUATuIhUw8','Assassin',2023,'17th September','16+','1h 28min','Thriller','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/1sOeXWeO-niYRdTEbmcmFCEJHhJDcZotS/view?usp=drive_link'),(8,'../assets/movies/no-hard-feelings-title.png','../assets/movies/bg-no-hard-feelings.jpeg','../assets/movies/no-hard-feelings.jpeg','https://www.youtube.com/embed/7psP7xBEa28','No Hard Feelings',2023,'06th October','14+','1h 43min','Romance','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/1sOeXWeO-niYRdTEbmcmFCEJHhJDcZotS/view?usp=drive_link'),(9,'../assets/movies/peter-pan-and-wendy-title.png','../assets/movies/bg-peter-pan-and-wendy.jpeg','../assets/movies/peter-pan-and-wendy.jpg','https://www.youtube.com/embed/9Ji5U2sTlLU','Peter Pan & Wendy',2023,'14th October','12+','1h 49min','Adventure','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/1sOeXWeO-niYRdTEbmcmFCEJHhJDcZotS/view?usp=drive_link'),(10,'../assets/movies/heart-of-stone-title.png','../assets/movies/bg-heart-of-stone.jpeg','../assets/movies/heart-of-stone.jpg','https://www.youtube.com/embed/XuDwndGaCFo','Heart of Stone',2023,'09th November','15+','2h 02min','Action','coming','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo felis tempor augue tristique, eget dignissim sapien ornare. Nullam vel hendrerit metus, a interdum risus. Etiam commodo lorem arcu, a tempus risus tempus sed. Proin ornare nec massa eget rhoncus. In rutrum aliquet dui, et placerat est molestie id.',0,'https://drive.google.com/file/d/1sOeXWeO-niYRdTEbmcmFCEJHhJDcZotS/view?usp=drive_link');


