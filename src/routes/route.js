import express from 'express';
import { AfficherTacheSelonUser } from '../controllers/controller.js';
import { AfficherTacheDetail } from'../controllers/controller.js';

// Nous avons besoin d'importer le module express pour utiliser le Router
// Nous créons un objet router qui va nous permettre de gérer les routes
const router = express.Router();    

router.get('/:utilisateur', (req, res) => {
    const utilisateur = req.params.utilisateur;
    AfficherTacheSelonUser(res, req);
});

router.get('/detail/:tache', (req, res) => {
    const utilisateur = req.params.tache;
    AfficherTacheDetail(res, req);
});

// On exporte le router pour pouvoir l'utiliser dans index.js
export default router;