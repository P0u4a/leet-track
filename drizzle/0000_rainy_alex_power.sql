CREATE TABLE `questions` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`difficulty` text NOT NULL,
	`time_elapsed` integer NOT NULL,
	`notes` text,
	`date_completed` integer DEFAULT (unixepoch()) NOT NULL,
	`user_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `tag_allocations` (
	`question_id` text NOT NULL,
	`tag_name` text NOT NULL,
	PRIMARY KEY(`question_id`, `tag_name`),
	FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`tag_name`) REFERENCES `tags`(`name`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `tags` (
	`name` text PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL
);
