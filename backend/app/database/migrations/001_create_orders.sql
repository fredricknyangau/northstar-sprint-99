Create Table orders (
    id SERIAL PRIMARY KEY,
    status TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
