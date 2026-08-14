TRUNCATE TABLE returns, order_items, orders
RESTART IDENTITY CASCADE;

INSERT INTO orders (customer_name, product_name, status, created_at)
VALUES
('John Kamau', 'Nike Air Max 270', 'pending', NOW() - INTERVAL '10 days'),
('Mary Wanjiku', 'Samsung Galaxy A15', 'shipped', NOW() - INTERVAL '9 days'),
('Brian Otieno', 'Adidas Ultraboost', 'delivered', NOW() - INTERVAL '8 days'),
('Grace Akinyi', 'HP Wireless Mouse', 'returned', NOW() - INTERVAL '7 days'),
('David Mwangi', 'JBL Bluetooth Speaker', 'pending', NOW() - INTERVAL '6 days'),
('Faith Njeri', 'Lenovo Laptop Bag', 'shipped', NOW() - INTERVAL '6 days'),
('Kevin Ochieng', 'Apple AirPods', 'delivered', NOW() - INTERVAL '5 days'),
('Lucy Wambui', 'Logitech Keyboard', 'returned', NOW() - INTERVAL '5 days'),
('Samuel Kiptoo', 'Sony Headphones', 'pending', NOW() - INTERVAL '4 days'),
('Ann Muthoni', 'Xiaomi Redmi Note 13', 'shipped', NOW() - INTERVAL '4 days'),
('Peter Kariuki', 'Puma Running Shoes', 'delivered', NOW() - INTERVAL '3 days'),
('Esther Nyambura', 'Dell USB-C Hub', 'returned', NOW() - INTERVAL '3 days'),
('Daniel Maina', 'Anker Power Bank', 'pending', NOW() - INTERVAL '2 days'),
('Sharon Atieno', 'Adidas Backpack', 'shipped', NOW() - INTERVAL '2 days'),
('Joseph Kibet', 'Samsung 24-inch Monitor', 'delivered', NOW() - INTERVAL '2 days'),
('Mercy Wairimu', 'JBL Earbuds', 'returned', NOW() - INTERVAL '1 day'),
('Alex Mutua', 'HP Laptop', 'pending', NOW() - INTERVAL '1 day'),
('Irene Chebet', 'Nike Sports Jacket', 'shipped', NOW() - INTERVAL '1 day'),
('Martin Odhiambo', 'LG Smart TV', 'delivered', NOW() - INTERVAL '12 hours'),
('Susan Njoki', 'Logitech Webcam', 'returned', NOW() - INTERVAL '6 hours');

INSERT INTO order_items (order_id, item_name, quantity)
VALUES
(1, 'Nike Air Max 270', 1),
(2, 'Samsung Galaxy A15', 1),
(3, 'Adidas Ultraboost', 1),
(4, 'HP Wireless Mouse', 2),
(5, 'JBL Bluetooth Speaker', 1),
(6, 'Lenovo Laptop Bag', 1),
(7, 'Apple AirPods', 1),
(8, 'Logitech Keyboard', 1),
(9, 'Sony Headphones', 1),
(10, 'Xiaomi Redmi Note 13', 1),
(11, 'Puma Running Shoes', 1),
(12, 'Dell USB-C Hub', 2),
(13, 'Anker Power Bank', 1),
(14, 'Adidas Backpack', 1),
(15, 'Samsung 24-inch Monitor', 1),
(16, 'JBL Earbuds', 1),
(17, 'HP Laptop', 1),
(18, 'Nike Sports Jacket', 1),
(19, 'LG Smart TV', 1),
(20, 'Logitech Webcam', 1);

INSERT INTO returns (order_id, reason, status, created_at)
VALUES
(4, 'Customer received the wrong item', 'approved', NOW() - INTERVAL '6 days'),
(8, 'Product was damaged on arrival', 'refunded', NOW() - INTERVAL '4 days'),
(12, 'Customer changed their mind', 'pending', NOW() - INTERVAL '2 days'),
(16, 'Product does not meet expectations', 'approved', NOW() - INTERVAL '1 day'),
(20, 'Item arrived damaged', 'pending', NOW() - INTERVAL '5 hours');