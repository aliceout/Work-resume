/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Définition des variables
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
const langChangeToggle = document.getElementById('language-checkbox');

const currentURL = document.location.href.replace(/\/$/, "");
console.log("currentURL : ", currentURL);

const currentLang = currentURL.substring(currentURL.lastIndexOf("/") + 1);
console.log("currentLang : ", currentLang);

currentPage = currentURL.slice(0, -3).substring(currentURL.slice(0, -3).lastIndexOf("/") + 1);
console.log("currentPage:", currentPage);

let baseURL = currentURL.replace(new RegExp(`/(${currentPage}/${currentLang})`), '');
console.log("baseURL : ", baseURL);


/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Language switcher
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
const langSwitcher = (targetLang) => {
    if (currentLang !== targetLang) {
        window.location.href = `${baseURL}/${targetLang}`;
        console.log("destination : ", `${baseURL}/${targetLang}`);
    } else {
        window.location.href = `${baseURL}/index/${targetLang}`;
        console.log("destination : ", `${baseURL}/index/${targetLang}`);
    }
};

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Ecouteur d'évènements
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
document.getElementById('language-checkbox').addEventListener('click', () => {

    var targetLang = (!localStorage.getItem('langChange') || localStorage.getItem('langChange' === 'fr')) ? 'fr' : 'en';
    console.log("targetLang : ",targetLang);

    if (targetLang == 'en') {
        localStorage.setItem('langChange', 'en');
        langChangeToggle.setAttribute('checked', true);
        langSwitcher(targetLang);

    } else {
        localStorage.setItem('langChange', 'fr');
        langChangeToggle.setAttribute('checked', false);
        langSwitcher(targetLang);
    }
});