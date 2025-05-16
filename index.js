import express from 'express';

// Importation du module swagger-ui-express
import swaggerUi from 'swagger-ui-express';
// Le fichier qui contient la documentation au format JSON, ajustez selon votre projet
import fs from 'fs';
import tacheRouter from './src/routes/route.js';
const swaggerDocument = JSON.parse(fs.readFileSync('./src/config/documentation.json', 'utf8'));


// Options le l'interface, changez le titre "Demo API" pour le nom de votre projet 
const swaggerOptions = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "ListeDeTache API"
};

// Créer une application express
const app = express();

// Importer les middlewares
app.use(express.json());

// Routes
// La route à utiliser pour accéder au rendu visuel de la documentation
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

//route vers le router
app.use('/api/tache', tacheRouter);

// Démarrer le serveur
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
