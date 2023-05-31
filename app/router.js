/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Paramètres
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
import express from 'express';
const router = express.Router();

/*
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Definition des routes
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
router.get('/', (req, res) => {
    const lang = (!req.params.id) ? "fr" : req.params.id;
    if (lang == "fr" || lang == "") { res.render("fr/index", {lang}) }
    else { res.render("en/index", {lang}) }
});

router.get('/:id', (req, res) => {
    const lang = (!req.params.id) ? "fr" : req.params.id;
    if (lang == "fr" || lang == "") { res.render("fr/index", {lang}) }
    else { res.render("en/index", {lang}) }
});

router.get('/index/:id', (req, res) => {
    const lang = (!req.params.id) ? "fr" : req.params.id;
    if (lang == "fr" || lang == "") { res.render("fr/index", {lang}) }
    else { res.render("en/index", {lang}) }
});

router.get('/education/:id', (req, res) => {
    const lang = (!req.params.id) ? "fr" : req.params.id;
    if (lang == "fr" || lang == "") { res.render("fr/education", {lang}) }
    else { res.render("en/education", {lang}) }
});

router.get('/experiences/:id', (req, res) => {
    const lang = (!req.params.id) ? "fr" : req.params.id;
    if (lang == "fr" || lang == "") { res.render("fr/experiences", {lang}) }
    else { res.render("en/experiences", {lang}) }
});

router.get('/volunteering/:id', (req, res) => {
    const lang = (!req.params.id) ? "fr" : req.params.id;
    if (lang == "fr" || lang == "") { res.render("fr/volunteering", {lang}) }
    else { res.render("en/volunteering", {lang}) }
});

router.get('/personnal/:id', (req, res) => {
    const lang = (!req.params.id) ? "fr" : req.params.id;
    if (lang == "fr" || lang == "") { res.render("fr/personnal", {lang}) }
    else { res.render("en/personnal", {lang}) }
});

router.get('/skills/:id', (req, res) => {
    const lang = (!req.params.id) ? "fr" : req.params.id;
    if (lang == "fr" || lang == "") { res.render("fr/skills", {lang}) }
    else { res.render("en/skills", {lang}) }
})

router.get('/contact/:id', (req, res) => {
    res.redirect("https://join.skype.com/invite/II99wpbBBR78")
});

router.get('/resume/:id', (req, res) => {
    res.redirect("https://cloud.ofanch.me/s/nCnZ5W7AM5adape#pdfviewer")
});

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Export
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
export { router };