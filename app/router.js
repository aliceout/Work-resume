/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Paramètres
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
import express from 'express';                                       // Import du module ExpressJS 
const router = express.Router();                                     // Import du module routeur d'ExpressJS

/*
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  2- Definition des routes
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/     
/// Partie française
router.get('/', (req, res) => {res.render("fr/index")});
router.get('/index', (req, res) => {res.render("fr/index")});
router.get('/education', (req, res) => {res.render("fr/education")});
router.get('/experiences', (req, res) => {res.render("fr/experiences")});
router.get('/benevolat', (req, res) => {res.render("fr/benevolat")});
router.get('/personnal', (req, res) => {res.render("fr/personnal")});
router.get('/skills', (req, res) => {res.render("fr/skills")});
router.get('/contact', (req, res) => {res.redirect("https://join.skype.com/invite/II99wpbBBR78")});
router.get('/resume', (req, res) => {res.redirect("https://cloud.ofanch.me/s/nCnZ5W7AM5adape#pdfviewer")});

/// Partie anglaise
router.get('/', (req, res) => {res.render("en/index")});
router.get('/index', (req, res) => {res.render("en/index")});
router.get('/education', (req, res) => {res.render("en/education")});
router.get('/experiences', (req, res) => {res.render("en/experiences")});
router.get('/benevolat', (req, res) => {res.render("en/benevolat")});
router.get('/personnal', (req, res) => {res.render("en/personnal")});
router.get('/skills', (req, res) => {res.render("en/skills")});

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Export
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
export {router};