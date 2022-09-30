CREATE DATABASE yo_budget;

CREATE TABLE operations (
    id TINYINT AUTO_INCREMENT PRIMARY KEY,
    concept VARCHAR(200) NOT NULL,
    amount DECIMAL(7, 2) NOT NULL,
    operation_date DATE NOT NULL,
    operation_type VARCHAR(10) NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    id_user TINYINT,
    id_category TINYINT,
    FOREIGN KEY (id_user) REFERENCES users(id)
    FOREIGN KEY (id_category) REFERENCES catogories(id)
);

CREATE TABLE category (
    id TINYINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL
)

CREATE TABLE users (
    id TINYINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    lastname VARCHAR(150) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    url_img VARCHAR(200) NOT NULL,
)