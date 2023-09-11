ALTER TABLE `questions` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `tag_allocations` MODIFY COLUMN `question_id` int NOT NULL;