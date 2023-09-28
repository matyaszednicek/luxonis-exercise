CREATE TABLE flats (
	id serial4 NOT NULL,
	title varchar(100) NOT NULL,
	locality varchar(100) NOT NULL,
	price varchar(100) NOT NULL,
	url varchar(200) NOT NULL,
	image varchar(200) NOT NULL,
	CONSTRAINT flats_pkey PRIMARY KEY (id)
);

COPY flats (title, locality, price, "url", "image") FROM '/var/lib/postgresql/csvs/flats.csv' DELIMITER ',' CSV HEADER;