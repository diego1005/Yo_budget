-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 16-10-2022 a las 23:06:50
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `yo_budget`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operations`
--

DROP TABLE IF EXISTS `operations`;
CREATE TABLE IF NOT EXISTS `operations` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `concept` varchar(200) NOT NULL,
  `amount` decimal(11,2) NOT NULL,
  `operation_date` date NOT NULL,
  `operation_type` varchar(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `id_user` tinyint(4) DEFAULT NULL,
  `id_category` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_category` (`id_category`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `operations`
--

INSERT INTO `operations` (`id`, `concept`, `amount`, `operation_date`, `operation_type`, `created_at`, `updated_at`, `deleted_at`, `id_user`, `id_category`) VALUES
(1, 'sdfsdf', '1500.00', '2022-10-16', 'incomes', '2022-10-01 18:37:32', '2022-10-16 22:36:54', NULL, NULL, 0),
(2, 'sueldo', '100000.00', '2020-10-01', 'income', '2022-10-01 18:42:16', '2022-10-01 18:42:16', NULL, NULL, 3),
(3, 'sueldo', '100000.00', '2020-10-01', 'income', '2022-10-01 18:42:35', '2022-10-01 18:42:35', NULL, NULL, 3),
(4, 'Comida', '1500.00', '2022-10-16', 'Expenses', '2022-10-16 19:01:12', '2022-10-16 19:01:12', NULL, NULL, 0),
(7, 'Salida', '4500.00', '2022-10-16', 'Expenses', '2022-10-16 19:22:39', '2022-10-16 19:22:39', NULL, NULL, 0),
(8, 'Nafta', '5000.00', '2022-10-16', 'Expenses', '2022-10-16 20:34:08', '2022-10-16 20:34:08', NULL, NULL, 0),
(9, 'Almuerzo', '1000.00', '2022-10-16', 'Expenses', '2022-10-16 21:34:14', '2022-10-16 21:34:14', NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` tinyint(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `lastname` varchar(150) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `url_img` varchar(200) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `email`, `password`, `url_img`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Juan', 'Perez', 'juan.user@gmail.com', '$2a$10$8.l69Fzr0zrq89PwDGqQz.xlV9g4Axo3ASFzlCfMNf9ur9UjFHwZ6', '1665241621456-user_img-.webp', '2022-10-08 15:07:01', '2022-10-08 15:07:01', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
