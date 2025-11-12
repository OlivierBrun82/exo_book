book
id - int - primary key - auto_increment
title varchar(150) - not null
autor - varchar(150) - not null
dispo - boolean - not null - default true
created_at - datetime - not null - default current_timestamp
updated_at - datetime - not null - default current_timestamp
-----------------------------------------------------------------

1_	Création d'un git nommé exo_book avec template .gitignore node de github

	- cd exo_book
	- git clone git@github.com:OlivierBrun82/exo_book.git

2_	Initialisation du projet avec "npm init -y" intialise le projet

	- "npm install --save-dev nodemon"
		pour recharger automatiquement le server
		
	- "npm install express"
		afin d'avoir un squelette de la structure
		
	- "npm install dotenv"
		pour charger les variables d'environnement du ficher .env
		
	- Création du fichier .env avec ses valeurs :
		PORT=3000
		NODE_ENV=development
		DB_HOST=localhost
		DB_PORT=3306
		DB_USER=root
		DB_PASS=
		DB_NAME=exo_book
		
	- "npm install cors"
		lorsque l'on fera le front-end pour quils communiquent ensemble.
		
	- "npm install sequelize mysql2"
		installation de l'orm sequelize avec le parametre mysql2
		
	- "npm install --save-dev sequelize-cli"
		installation de l'outil en ligne de commande sequelize-cli que l'on utilisera plus tard.
		
3_	Création d'un fichier .sequelizerc à la racine du projet afin de lui fournir les route où il doit écrire
		
		const path = require('path');

module.exports = {
    'config': path.resolve('src/config', 'config.js'),
    'models-path': path.resolve('src/models'),
    'seeders-path': path.resolve('src/seeders'),
    'migrations-path': path.resolve('src/migrations')
}

4_	"npx sequelize-cli init"

retour :

Sequelize CLI [Node: 22.20.0, CLI: 6.6.3, ORM: 6.37.7]

Created "src\config\config.js"
Successfully created models folder at "C:\laragon\www\React_NodeJS\exo_book\src\models".
Successfully created migrations folder at "C:\laragon\www\React_NodeJS\exo_book\src\migrations".
Successfully created seeders folder at "C:\laragon\www\React_NodeJS\exo_book\src\seeders".

	- On modifie le fichier config.js :
	
require('dotenv').config();
module.exports = {
  development:{
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    dialectOptions: {decimalNumbers: true},
    define: {underscored: true}
  }
}

5_	Modification du ficher package.json pour gérer la db:

"db:create": "sequelize db:create",
"db:migrate": "sequelize db:migrate",
"db:migrate:undo": "sequelize db:migrate:undo",
"db:seed": "sequelize db:seed:all",
"db:seed:undo": "sequelize db:seed:undo:all"