DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(50) NOT NULL,
  price DECIMAL (11,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tandy 1000 TX", "Electronics", "1000000.00", "1");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Diamond Edge 3D", "Electronics", "9000.00", "1");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baby Unicorn Tears - 1 Gallon Jug", "Magic", "499.99", "75");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Phoenix Feather - One-of-a-kind", "Magic", "13999.99", "453");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lego Batman 1966 Minifigure", "Toys", "100.00", "3");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Unfinished Sentences 6-Pack (Assorted)", "Art", "1.39", "979840293");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("OLD USB Mouse (Randomly Selected)", "Electronics", "11.00", "23");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nerf N-Strike Modulus ECS-10 Blaster", "Toys", "49.99", "2");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jackson Pollock Painting (Fake)", "Art", "72.00", "3");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dilithium Crystals 12-Pack", "Sci-Fi", "23.99", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Proton Pack - (5,000 year half-life)", "Sci-Fi", "239000.00", "4");
