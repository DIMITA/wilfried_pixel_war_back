-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 12 oct. 2023 à 21:19
-- Version du serveur : 8.1.0
-- Version de PHP : 8.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pixel_war_db`
--

-- --------------------------------------------------------

--
-- Structure de la table `pixel`
--

CREATE TABLE `pixel` (
  `id` int NOT NULL,
  `color` varchar(500) NOT NULL,
  `coordx` int NOT NULL,
  `coordy` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `pixel`
--

INSERT INTO `pixel` (`id`, `color`, `coordx`, `coordy`) VALUES
(1, 'balck', 3, 4),
(2, 'red', 2, 1),
(3, 'black', 10, 3),
(4, '#1D6386', 7, 5),
(5, '#12587B', 2, 7),
(6, '#6E0E64', 7, 17),
(7, '#AC0606', 3, 11),
(8, 'black', 9, 13),
(9, '#004F76', 14, 13),
(10, '#0AD60B', 7, 9),
(11, '#0AD60B', 7, 9),
(12, '#9F0452', 19, 13);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `pixel`
--
ALTER TABLE `pixel`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `pixel`
--
ALTER TABLE `pixel`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
