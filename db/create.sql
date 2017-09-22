USE blog;

CREATE TABLE `blog`.`articles` (
	`id` int(4) ZEROFILL NOT NULL AUTO_INCREMENT,
	`title` varchar(30),
	`content` text,
    `categories` varchar(100),
	`views` mediumint(9) NOT NULL DEFAULT '0',
	`created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`last_modified_time` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`),
	INDEX `views` USING BTREE (views)
) ENGINE=`InnoDB` AUTO_INCREMENT=1 DEFAULT CHARACTER SET utf8;


CREATE TABLE `blog`.`drafts` (
	`id` int(4) ZEROFILL NOT NULL AUTO_INCREMENT,
	`title` varchar(30) NOT NULL,
	`content` text NOT NULL,
    `categories` varchar(100) NOT NULL,
	`views` mediumint(9) NOT NULL DEFAULT '0',
	`created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`last_modified_time` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`),
	INDEX `views` USING BTREE (views)
) ENGINE=`InnoDB` AUTO_INCREMENT=1 DEFAULT CHARACTER SET utf8;


CREATE TABLE `blog`.`categories` (
	`id` int(4) NOT NULL AUTO_INCREMENT,
	`name` varchar(20) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=`InnoDB` AUTO_INCREMENT=1;


-- CREATE TABLE `blog`.`a_c` (
-- 	`id` int(9) NOT NULL AUTO_INCREMENT,
-- 	`article_id` int(9) NOT NULL,
-- 	`category_id` int(9) NOT NULL,
-- 	PRIMARY KEY (`id`),
-- 	FOREIGN KEY (`article_id`) REFERENCES `blog`.`article` (`id`)   ON UPDATE CASCADE ON DELETE CASCADE,
-- 	FOREIGN KEY (`category_id`) REFERENCES `blog`.`categories` (`id`)   ON UPDATE CASCADE ON DELETE CASCADE,
-- 	INDEX  USING BTREE (article_id),
-- 	INDEX  USING BTREE (category_id)
-- ) ENGINE=`InnoDB` AUTO_INCREMENT=1;
