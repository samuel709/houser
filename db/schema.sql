CREATE TABLE house(
    id SERIAL PRIMARY KEY,
    name TEXT,
    address TEXT,
    city TEXT,
    state VARCHAR(2),
    zip INT
)

-- DUMMY DATA
INSERT INTO house(name, address, city, state, zip)
VALUES('Sunshine House', '1234 S Main St.', 'Fredricksburg', 'TX', 88888),
('Batman House', 'Bat Cave', 'Gotham', 'UT', 12345),
('Titan Tower', 'Pacific Ocean 1423 N', 'San Diego', 'CA', 55524)