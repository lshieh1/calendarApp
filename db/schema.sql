\c calendarapi

DROP TABLE IF EXISTS events;

CREATE TABLE events (
	id SERIAL PRIMARY KEY,
	start_time TIME(0),
	end_time TIME(0),
	description TEXT,
	day INT
);