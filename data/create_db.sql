CREATE TABLE "difficulté" (
  "id_difficulté" SERIAL PRIMARY KEY,
  "nom" VARCHAR(255) NOT NULL
);

CREATE TABLE "utilisateur" (
  "id_utilisateur" SERIAL PRIMARY KEY,
  "nom" VARCHAR(255) NOT NULL,
  "prénom" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "mot_de_passe" VARCHAR(255) NOT NULL
);

CREATE TABLE "thème" (
  "id_thème" SERIAL PRIMARY KEY,
  "nom" VARCHAR(255) NOT NULL
);

CREATE TABLE "quiz" (
  "id_quiz" SERIAL PRIMARY KEY,
  "titre" VARCHAR(255) NOT NULL,
  "description" TEXT NOT NULL,
  "id_utilisateur" INT NOT NULL,
  FOREIGN KEY ("id_utilisateur") REFERENCES utilisateur("id_utilisateur")
);


CREATE TABLE "question" (
  "id_question" SERIAL PRIMARY KEY,
  "description" TEXT NOT NULL,
  "wiki" TEXT NOT NULL,
  "anecdote" TEXT,
  "id_difficulté" INT NOT NULL,
  FOREIGN KEY ("id_difficulté") REFERENCES difficulté("id_difficulté"),
  "id_quiz" INT NOT NULL,
  FOREIGN KEY ("id_quiz") REFERENCES quiz("id_quiz")
);

CREATE TABLE "proposition" (
  "id_proposition" SERIAL PRIMARY KEY,
  "description" TEXT NOT NULL,
  "id_question" INT NOT NULL,
  FOREIGN KEY ("id_question") REFERENCES question("id_question")
);


CREATE TABLE "sujet" (
  "id_sujet" SERIAL PRIMARY KEY,
  "id_quiz" INT NOT NULL,
  "id_thème" INT NOT NULL,
  FOREIGN KEY ("id_quiz") REFERENCES quiz("id_quiz"),
  FOREIGN KEY ("id_thème") REFERENCES thème("id_thème")
);


set client_encoding to utf8;

INSERT INTO "difficulté" ("id_difficulté", "nom") VALUES
 (1, 'facile'),
  (2, 'moyen'),
   (3, 'difficile');


INSERT INTO "utilisateur" ("id_utilisateur", "nom", "prénom", "email", "mot_de_passe") VALUES
 (1, '1', '1', '1', '1'),
 (2, '2', '2', '2', '2'),
 (3, '3', '3', '3', '3');


INSERT INTO "quiz" ("id_quiz", "titre", "description", "id_utilisateur") VALUES
 (1, '1', '1', 1),
 (2, '2', '2', 2),
 (3, '3', '3', 3);