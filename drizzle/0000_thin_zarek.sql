-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `questions` (
	`id` varchar(64) NOT NULL,
	`name` varchar(64) NOT NULL,
	`difficulty` enum('Easy','Medium','Hard') NOT NULL,
	`time_elapsed` int NOT NULL,
	`notes` varchar(255),
	`user_id` varchar(64) NOT NULL,
	CONSTRAINT `questions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `tag_allocations` (
	`question_id` varchar(64) NOT NULL,
	`tag_name` varchar(64) NOT NULL,
	CONSTRAINT `tag_allocations_question_id_tag_name` PRIMARY KEY(`question_id`,`tag_name`)
);
--> statement-breakpoint
CREATE TABLE `tags` (
	`name` varchar(64) NOT NULL,
	CONSTRAINT `tags_name` PRIMARY KEY(`name`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` varchar(64) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `user_id_idx` ON `questions` (`user_id`);--> statement-breakpoint
CREATE INDEX `question_id_idx` ON `tag_allocations` (`question_id`);--> statement-breakpoint
CREATE INDEX `tag_name_idx` ON `tag_allocations` (`tag_name`);
*/