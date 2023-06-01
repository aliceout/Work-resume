/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Import modules
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
import express from 'express';                                                  // Import express
const router = express.Router();                                                // Création du router

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Import controllers
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
import { mainController } from './controllers/mainController.js';               // Import du controller principal

/*
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Definition des routes
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
router.get('/', (req, res) => {                                                 // Page d'index
    const lang = req.params.id || "fr";
    res.render("fr/index", { lang });
});

router.get('/index/:id', mainController.renderPage('index'));   
router.get('/education/:id', mainController.renderPage('education'));
router.get('/experiences/:id', mainController.renderPage('experiences'));
router.get('/volunteering/:id', mainController.renderPage('volunteering'));
router.get('/personnal/:id', mainController.renderPage('personnal'));
router.get('/skills/:id', mainController.renderPage('skills'));

router.get('/contact', (req, res) => {
    res.redirect("https://join.skype.com/invite/II99wpbBBR78")
});

router.get('/resume', (req, res) => {
    res.redirect("https://cloud.ofanch.me/s/nCnZ5W7AM5adape#pdfviewer")
});

router.get('/:id', mainController.renderPage('index'));                         // Page d'index avec langue déclarée

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Export
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
export { router };