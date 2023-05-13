/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Définition des variables
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
const langChangeToggle = document.getElementById('language-checkbox');                                  // Définition du bouton
const currentURL = document.location.href.replace(/\/$/, "");                                           // Définition de l'URL
const host = window.location.host;                                                                        // Définition de l'hôte
const domain = (host == "localhost") ? "http://localhost/work" : `https://${host}`;                       // Définition de la domaine
const currentPage = currentURL.substring(currentURL.lastIndexOf("/") + 1);                              // Définition de la page
const currentLanguage = (host == "localhost") ? currentURL.slice(22, 24) : currentURL.slice(24, 26);    // Définition de la langue actuelle
const toggleLanguage = (currentLanguage == "fr") ? "en" : "fr";                                         // Définition de la langue inverse
const langChange = localStorage.getItem('langChange');                                                  // Récupération de l'état de la checkbox'

if (currentLanguage == "en") { document.getElementById('language-checkbox').checked = true; };          // Si la langue est anglais
if (langChange === 'enabled' && currentLanguage != 'en') { englishLang(); };                            // Si la langue est française

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Language switcher
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
const langSwitcher = () => {                                                                            // Fonction de changement de langue
    if (currentPage !== currentLanguage) {                                                              // Si la page est différente de la langue
        window.location.href = `${domain}/${toggleLanguage}/${currentPage}`;                            // Redirection vers la page
    } else {                                                                                            // Sinon
        window.location.href = `${domain}/${toggleLanguage}/index.php`;                                 // Redirection vers la page
    }
};

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Ecouteur d'évènements
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
document.getElementById('language-checkbox').addEventListener('click', () => {                          // Définition de l'écouteur
    if (langChange !== 'enabled') {
        langSwitcher();                                                                                 // Définition de la langue
        localStorage.setItem('langChange', 'enabled');                                                  // Définition de la langue
        langChangeToggle.setAttribute('checked', true);                                                 // Définition de la langue
    } else {
        langSwitcher();                                                                                 // Définition de la langue
        localStorage.setItem('langChange', null);                                                       // Définition de la langue
        langChangeToggle.setAttribute('checked', false);                                                // Définition de la langue
    }
});

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Sources
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
// - http://memo-web.fr/categorie-javascript-48/
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else
// - https://code.tutsplus.com/tutorials/how-to-change-the-url-in-javascript-redirecting--cms-37323