# Exo Book - Documentation du Projet

## Structure de la table `book`

| Colonne | Type | Contraintes |
|---------|------|-------------|
| `id` | int | PRIMARY KEY, AUTO_INCREMENT |
| `title` | varchar(150) | NOT NULL |
| `autor` | varchar(150) | NOT NULL |
| `dispo` | boolean | NOT NULL, DEFAULT true |
| `created_at` | datetime | NOT NULL, DEFAULT CURRENT_TIMESTAMP |
| `updated_at` | datetime | NOT NULL, DEFAULT CURRENT_TIMESTAMP |

---

## 1. Création du dépôt Git

Création d'un dépôt Git nommé `exo_book` avec le template `.gitignore` Node.js de GitHub.

```bash
cd exo_book
git clone git@github.com:OlivierBrun82/exo_book.git
```

---

## 2. Initialisation du projet

Initialisation du projet avec `npm init -y`.

### Installation des dépendances

#### Dépendances de développement

```bash
npm install --save-dev nodemon
```
> Pour recharger automatiquement le serveur

```bash
npm install --save-dev sequelize-cli
```
> Installation de l'outil en ligne de commande sequelize-cli

#### Dépendances de production

```bash
npm install express
```
> Framework web pour créer le squelette de la structure

```bash
npm install dotenv
```
> Pour charger les variables d'environnement du fichier `.env`

```bash
npm install cors
```
> Pour permettre la communication entre le front-end et le back-end

```bash
npm install sequelize mysql2
```
> Installation de l'ORM Sequelize avec le driver MySQL2

```bash
npm install morgan
```
> Installation du middleware de logging des requêtes HTTP

### Configuration du fichier `.env`

Créer un fichier `.env` à la racine du projet avec les valeurs suivantes :

```env
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=
DB_NAME=exo_book
```

---

## 3. Configuration de Sequelize

### Création du fichier `.sequelizerc`

Créer un fichier `.sequelizerc` à la racine du projet pour définir les chemins où Sequelize doit écrire :

```javascript
const path = require('path');

module.exports = {
    'config': path.resolve('src/config', 'config.js'),
    'models-path': path.resolve('src/models'),
    'seeders-path': path.resolve('src/seeders'),
    'migrations-path': path.resolve('src/migrations')
}
```

---

## 4. Initialisation de Sequelize CLI

Exécuter la commande suivante :

```bash
npx sequelize-cli init
```

**Résultat attendu :**

```
Sequelize CLI [Node: 22.20.0, CLI: 6.6.3, ORM: 6.37.7]

Created "src\config\config.js"
Successfully created models folder at "C:\laragon\www\React_NodeJS\exo_book\src\models".
Successfully created migrations folder at "C:\laragon\www\React_NodeJS\exo_book\src\migrations".
Successfully created seeders folder at "C:\laragon\www\React_NodeJS\exo_book\src\seeders".
```

### Modification du fichier `config.js`

Modifier le fichier `src/config/config.js` avec la configuration suivante :

```javascript
require('dotenv').config();
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    dialectOptions: { decimalNumbers: true },
    define: { underscored: true }
  }
}
```

---

## 5. Scripts npm pour la base de données

Ajouter les scripts suivants dans le fichier `package.json` pour gérer la base de données :

```json
{
  "scripts": {
    "db:create": "sequelize db:create",
    "db:migrate": "sequelize db:migrate",
    "db:migrate:undo": "sequelize db:migrate:undo",
    "db:seed": "sequelize db:seed:all",
    "db:seed:undo": "sequelize db:seed:undo:all"
  }
}
```
## Création de la base de donnée

```bash
npx sequelize-cli db:create
```

> Crée la db exo_book dans MySQL en fonction du nom donnée dans le .env

```bash
npx sequelize-cli migration:generate --name create-health-checks
```
> Crée un ficher dans ./src/migrations/ avec timestampe-create-healthcheck.js


```bash
npx sequelize-cli model:generate --name Book --attributes title:string 
```

> retour : 
Sequelize CLI [Node: 22.20.0, CLI: 6.6.3, ORM: 6.37.7]

New model was created at C:\laragon\www\React_NodeJS\exo_book\src\models\book.js .
New migration was created at C:\laragon\www\React_NodeJS\exo_book\src\migrations\20251113084826-create-book.js .

## Modification du fichier de migration

puis :
```bash
npm run db:migrate
```

## généré par gemini pour remplir la base de donnée d'une 10aines d'oeuvres :

INSERT INTO `books` (`title`, `autor`, `dispo`, `createdAt`, `updatedAt`) VALUES
('L\'Étranger', 'Albert Camus', 1, NOW(), NOW()),
('1984', 'George Orwell', 1, NOW(), NOW()),
('Le Petit Prince', 'Antoine de Saint-Exupéry', 0, NOW(), NOW()),
('Fahrenheit 451', 'Ray Bradbury', 1, NOW(), NOW()),
('Orgueil et Préjugés', 'Jane Austen', 1, NOW(), NOW()),
('Le Seigneur des Anneaux', 'J.R.R. Tolkien', 0, NOW(), NOW()),
('Les Misérables', 'Victor Hugo', 1, NOW(), NOW()),
('Dune', 'Frank Herbert', 1, NOW(), NOW()),
('Crime et Châtiment', 'Fiodor Dostoïevski', 0, NOW(), NOW()),
('Le Nom de la Rose', 'Umberto Eco', 1, NOW(), NOW());

### création du dossier controllers avec le controller books
### création du dossier routers avec le fichier books.routes.js et de l'index.js
## création du reads, read et create
{
	"title": "toto chez tata",
	"autor": "toto",
	"dispo": true
}
## création du update
## créatuion du delete

