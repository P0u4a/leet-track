ALTER TABLE account ADD `type` text NOT NULL;--> statement-breakpoint
ALTER TABLE account ADD `provider` text NOT NULL;--> statement-breakpoint
ALTER TABLE account ADD `providerAccountId` text NOT NULL;--> statement-breakpoint
/*
You're trying to add PRIMARY KEY(provider,providerAccountId) to 'account' table
SQLite does not support adding primary key to an already created table
You can do it in 3 steps with drizzle orm:
 - create new mirror table with needed pk, rename current table to old_table, generate SQL
 - migrate old data from one table to another
 - delete old_table in schema, generate sql

or create manual migration like below:

ALTER TABLE table_name RENAME TO old_table;
CREATE TABLE table_name (
	column1 datatype [ NULL | NOT NULL ],
	column2 datatype [ NULL | NOT NULL ],
	...
	PRIMARY KEY (pk_col1, pk_col2, ... pk_col_n)
 );
INSERT INTO table_name SELECT * FROM old_table;

Due to that we don't generate migration automatically and it has to be done manually
*/
