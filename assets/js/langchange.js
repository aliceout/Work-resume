/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Définition des variables
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
const langChangeToggle = document.getElementById('language-checkbox');                                     // Définition du bouton
const currentURL = document.location.href.replace(/\/$/, "");                                              // Définition de l'URL
const host = window.location.host;                                                                         // Définition de l'hôte
const currentPort = location.port;                                                                         // Définition de la port
const localhostType = (currentPort != "") ? "localhost:" + currentPort : "localhost";                      // Définition de l'hôte
const domain = (host == localhostType) ? "http://" + localhostType + "/work" : `https://${host}`;          // Définition de la domaine
const currentPage = currentURL.substring(currentURL.lastIndexOf("/") + 1);                                 // Définition de la page

if (window.location.hostname === 'localhost') {                                                            // Récupération de la langue actuelle
    currentLanguage = currentPort !== "" ? currentURL.slice(27, 29) : currentURL.slice(22, 24);            // Enfonction des env de développement
} else { currentLanguage = currentURL.slice(24, 26); }                                                     // Enfonction des env de production

const toggleLanguage = (currentLanguage == "fr") ? "en" : "fr";                                            // Définition de la langue inverse
const langChange = localStorage.getItem('langChange');                                                     // Récupération de l'état de la checkbox'

if (currentLanguage == "en") { document.getElementById('language-checkbox').checked = true; };             // Si la langue est anglais
if (langChange === 'en' && currentLanguage != 'en') { langSwitcher(); };                                   // Si la langue est française

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
    if (langChange == 'en') {
        langSwitcher();                                                                                 // Définition de la langue
        localStorage.setItem('langChange', 'en');                                                       // LangChange devient enabled
        langChangeToggle.setAttribute('checked', true);                                                 //  La checkbox est validée

    } else {
        langSwitcher();                                                                                 // Définition de la langue
        localStorage.setItem('langChange', 'fr');                                                       // LangChange devient null
        langChangeToggle.setAttribute('checked', false);                                                // La checkbox est dévalidée
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