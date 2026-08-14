ALTER TABLE orders
  ADD COLUMN customer_name TEXT NOT NULL DEFAULT 'Unknown Customer',
  ADD COLUMN product_name TEXT NOT NULL DEFAULT 'Unknown Product';
