PRIGMA foreign_key = ON;

CREATE TABLE IF NOT EXIST Something (
  id INTEGER PRIMARY KEY ASC,
  otherid INTEGER,
  data INTEGER,
  FOREIGN KEY (otherID) REFERENCES Other(id)
);

CREATE TABLE IF NOT EXISTS other (
  id INTEGER PRIMARY KEY ASC,
  data VARCHAR(40) UNIQUE
);

