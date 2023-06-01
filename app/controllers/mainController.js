/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Définitions
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
const mainController = {                                                                   // On définit la variable
    renderPage: (page, lang) => (req, res) => {                                            // On définit la fonction
        const lang = req.params.id || "fr";                                                // On définit la langue
        if (lang == "fr" || lang == "") {                                                  // Si la langue est fr
            res.render(`fr/${page}`, { lang })                                             // On affiche la page en FR
        } else {                                                                           // Sinon
            res.render(`en/${page}`, { lang })                                             // On affiche la page en EN
        }
    }
}

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Export
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
export { mainController };