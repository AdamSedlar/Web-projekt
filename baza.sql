-- SQL za bazu

CREATE DATABASE IF NOT EXISTS web_project;

USE web_project;
CREATE TABLE IF NOT EXISTS news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    short_content VARCHAR(100) NOT NULL,
    full_content TEXT NOT NULL,
    image VARCHAR(255) NOT NULL,
    category ENUM('sport', 'kultura') NOT NULL,
    archive BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ovo je primjer unosa podataka
INSERT INTO news (title, short_content, full_content, image, category, archive)
VALUES ('Sample News Title', 'Eample text', 'Full content', 'slika.jpg', 'type', 1);

