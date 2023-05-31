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
    const lang = (!req.session.lang) ? "fr" : false - req.session.lang;
    res.render("fr/index", {lang})
});

router.get('/index/:id', (req, res) => {
    const lang = (!req.session.lang) ? "fr" : false - req.session.lang;
    if (lang == "fr" || lang == "") { res.render("fr/index", {lang}) }
    else { res.render("en/index") }
});

router.get('/education/:id', (req, res) => {
    const lang = (!req.session.lang) ? "fr" : false - req.session.lang;
    if (lang == "fr" || lang == "") { res.render("fr/education", {lang}) }
    else { res.render("en/education") }
});

router.get('/experiences/:id', (req, res) => {
    const lang = (!req.session.lang) ? "fr" : false - req.session.lang;
    if (lang == "fr" || lang == "") { res.render("fr/experiences", {lang}) }
    else { res.render("en/experiences") }
});

router.get('/volunteering/:id', (req, res) => {
    const lang = (!req.session.lang) ? "fr" : false - req.session.lang;
    if (lang == "fr" || lang == "") { res.render("fr/volunteering", {lang}) }
    else { res.render("en/volunteering") }
});

router.get('/personnal/:id', (req, res) => {
    const lang = (!req.session.lang) ? "fr" : false - req.session.lang;
    if (lang == "fr" || lang == "") { res.render("fr/personnal", {lang}) }
    else { res.render("en/personnal") }
});

router.get('/skills/:id', (req, res) => {
    const lang = (!req.session.lang) ? "fr" : false - req.session.lang;
    if (lang == "fr" || lang == "") { res.render("fr/skills", {lang}) }
    else { res.render("en/skills") }
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