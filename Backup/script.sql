-- Database: Projet Final

DROP DATABASE IF EXISTS Projet_Final;
CREATE DATABASE IF NOT EXISTS Projet_Final;
USE Projet_Final;

DROP TABLE IF EXISTS utilisateur;
CREATE TABLE IF NOT EXISTS utilisateur
(
    id integer NOT NULL,
    nom character varying(30),
    prenom character varying(30),
    courriel character varying(255),
    cle_api character varying(30),
    password character varying(100),
    CONSTRAINT utilisateur_pkey PRIMARY KEY (id)
);

DROP TABLE IF EXISTS taches;
CREATE TABLE IF NOT EXISTS taches
(
    id integer NOT NULL,
    utilisateur_id integer,
    titre character varying(100),
    description character varying(500),
    date_debut date,
    date_echeance date,
    complete boolean,
    CONSTRAINT taches_pkey PRIMARY KEY (id),
    CONSTRAINT taches_utilisateur_id_fkey FOREIGN KEY (utilisateur_id)
        REFERENCES public.utilisateur (id)
);

DROP TABLE IF EXISTS sous_taches;
CREATE TABLE IF NOT EXISTS sous_taches
(
    id integer NOT NULL,
    tache_id integer,
    titre character varying(100),
    complete boolean,
    CONSTRAINT sous_taches_pkey PRIMARY KEY (id),
    CONSTRAINT sous_taches_tache_id_fkey FOREIGN KEY (tache_id)
	REFERENCES public.taches (id) MATCH SIMPLE
);

INSERT INTO utilisateur(
id, nom, prenom, courriel, password)
VALUES (1, 'duroseau', 'angelo', 'tata@idiot.com', 'toto2001'),
(2, 'durocher', 'dioxisse', 'tata@idiot.com', 'tata2007');
    
INSERT INTO taches(
id, utilisateur_id, titre, description, complete)
VALUES (1, 1, 'test', 'testdescription', false),
(2, 1, 'test', 'testdescription',true),
(3, 1, 'test', 'testdescription',false),
(4, 2, 'test', 'testdescription', false),
(5, 2, 'test', 'testdescription',true),
(6, 2, 'test', 'testdescription', false);
    
INSERT INTO sous_taches(
id, tache_id, titre, complete)
VALUES (1, 1, 'test1', true),(2, 1, 'test2', false),(3, 1, 'test3', false),
(4, 2, 'test1', false),(5, 2, 'test2', true),(6, 2, 'test3', false),
(7, 3, 'test1', false),(8, 3, 'test2', false),(9, 3, 'test3', true),
(10, 4, 'test1', true),(11, 4, 'test2', false),(12, 4, 'test3', false),
(13, 5, 'test1', false),(14, 5, 'test2', true),(15, 5, 'test3', false),
(16, 6, 'test1', false),(17, 6, 'test2', false),(18, 6, 'test3', true);