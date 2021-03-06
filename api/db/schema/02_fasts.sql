DROP TABLE IF EXISTS fasts CASCADE;

CREATE TABLE fasts (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  fast_type INTEGER NOT NULL,
  first_meal TIMESTAMP WITH TIME ZONE
);
