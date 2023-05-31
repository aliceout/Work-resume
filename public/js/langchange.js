/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Définition des variables
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/

const langChangeToggle = document.getElementById('language-checkbox');
// console.log("bouton : ", langChangeToggle.checked);

const currentURL = document.location.href.replace(/\/$/, "");
// console.log("currentURL : ", currentURL);

const currentLang = currentURL.substring(currentURL.lastIndexOf("/") + 1);
console.log("currentLang : ", currentLang);

currentPage = currentURL.slice(0, -3).substring(currentURL.slice(0, -3).lastIndexOf("/") + 1);
// console.log("currentPage:", currentPage);

let baseURL = currentURL.replace(new RegExp(`/(${currentPage}/${currentLang})`), '');
// console.log("baseURL : ", baseURL);


/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Language switcher
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
if (currentLang === "en" && langChangeToggle.checked === false) { langChangeToggle.setAttribute('checked', true) }
const langSwitcher = (targetLang) => {
    if (currentLang !== "fr" && currentLang !== "en") {
        window.location.href = `${baseURL}/${targetLang}`;
    } else {
        window.location.href = `${baseURL}/${currentPage}/${targetLang}`;
    }

    if (targetLang === 'fr') {
        langChangeToggle.setAttribute('checked', false);
    } else {
        langChangeToggle.setAttribute('checked', true);
    }
};

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Ecouteur d'évènements
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
document.getElementById('language-checkbox').addEventListener('click', () => {

    if (currentLang === 'fr' && sessionStorage.getItem('targetLang') === 'fr') {
        sessionStorage.setItem('targetLang', 'en');
        langSwitcher("en");
    } else if (currentLang === 'en' && sessionStorage.getItem('targetLang') === 'en') {
        sessionStorage.setItem('targetLang', 'fr');
        langSwitcher("fr");
    } else {
        sessionStorage.setItem('targetLang', 'en');
        langSwitcher("en");
    }
});

