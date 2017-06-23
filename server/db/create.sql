USE blog;

CREATE TABLE `blog`.`essay` (
	`id` tinyint(9) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
	`title` char(30) NOT NULL DEFAULT '',
	`content` text DEFAULT NULL,
	`views` mediumint(9) NOT NULL DEFAULT '0',
	`created_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`last_modified_time` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`),
	INDEX `views` USING BTREE (views),
) ENGINE=`InnoDB` AUTO_INCREMENT=1 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ROW_FORMAT=DYNAMIC CHECKSUM=0 DELAY_KEY_WRITE=0;


CREATE TABLE `blog`.`categories` (
	`id` int(9) NOT NULL AUTO_INCREMENT,
	`name` varchar(20) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=`InnoDB`;


CREATE TABLE `blog`.`essay_categories` (
	`id` int(9) NOT NULL,
	`essay_id` int(9) NOT NULL,
	`category_id` int(9) NOT NULL,
	PRIMARY KEY (`id`),
	CONSTRAINT `essay_id_fk` FOREIGN KEY (`essay_id`) REFERENCES `blog`.`essay` (`id`)   ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT `category_id_fk` FOREIGN KEY (`category_id`) REFERENCES `blog`.`categories` (`id`)   ON UPDATE CASCADE ON DELETE CASCADE,
	INDEX `essay_id` USING BTREE (essay_id),
	INDEX `category_id` USING BTREE (category_id)
) ENGINE=`InnoDB`;
