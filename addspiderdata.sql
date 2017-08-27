-- Creates new rows containing data in all named columns --
USE critters;

INSERT INTO critters.users (`id`,`email`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'booboo@bar.com','2017-08-27 13:40:17','2017-08-27 13:40:17');

INSERT INTO `spiders` (`id`,`identified`,`name`,`dangerous`,`zipCode`,`size`,`color`,`hairy`,`web`,`link`,`createdAt`,`updatedAt`,`userId`) VALUES (DEFAULT,false,' banana spider',true,80303,'Large','yellow',true,true,'https://s3-us-west-2.amazonaws.com/critterbucket/1503777886077bananaSpidy.jpg','2017-08-27 13:40:17','2017-08-27 13:40:17',2);


INSERT INTO critters.users (`id`,`email`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'foofighter@bar.com','2017-08-27 13:40:17','2017-08-27 13:40:17');

INSERT INTO `spiders` (`id`,`identified`,`name`,`dangerous`,`zipCode`,`size`,`color`,`hairy`,`web`,`link`,`createdAt`,`updatedAt`,`userId`) VALUES (DEFAULT,false,'tarantula',true,80303,'Large','black',true,true,'https://s3-us-west-2.amazonaws.com/critterbucket/1503788668443tarantulaBro.jpg','2017-08-27 12:40:17','2017-08-27 13:40:17',3);


INSERT INTO critters.users (`id`,`email`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'nono@bar.com','2017-08-27 13:40:17','2017-08-27 13:40:17');

INSERT INTO `spiders` (`id`,`identified`,`name`,`dangerous`,`zipCode`,`size`,`color`,`hairy`,`web`,`link`,`createdAt`,`updatedAt`,`userId`) VALUES (DEFAULT,false,'daddy long legs',true,80303,'Medium','brown',true,true,'https://s3-us-west-2.amazonaws.com/critterbucket/1503789213331daddy-long-legs.jpg','2017-08-27 13:40:17','2017-08-27 13:40:17',4);


INSERT INTO critters.users (`id`,`email`,`createdAt`,`updatedAt`) VALUES (DEFAULT,'margarita@bar.com','2017-08-27 13:40:17','2017-08-27 13:40:17');

INSERT INTO `spiders` (`id`,`identified`,`name`,`dangerous`,`zipCode`,`size`,`color`,`hairy`,`web`,`link`,`createdAt`,`updatedAt`,`userId`) VALUES (DEFAULT,false,'banded spider',true,80303,'Large','black',true,true,'https://s3-us-west-2.amazonaws.com/critterbucket/1503796764234bandedspider.jpg','2017-08-27 13:40:17','2017-08-27 13:40:17',5);
