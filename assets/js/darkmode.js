/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Définition des variables
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.getElementById('darkmode-checkbox');
const lightElements = document.querySelectorAll(".lightMode-elements");
const darkElements = document.querySelectorAll(".darkMode-elements");
const cardElements = document.querySelectorAll(".card");
const logoElements = document.querySelectorAll(".logo");
const switchElements = document.querySelectorAll(".switch");
/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Fonctions
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/

const setDarkMode = (enable) => {
    const body = document.body;
    const html = document.documentElement;

    body.classList.toggle('dark-mode', enable);
    html.classList.toggle('dark-mode', enable);
    darkElements.forEach(element => element.style.display = enable ? "block" : "none");
    lightElements.forEach(element => element.style.display = enable ? "none" : "block");
}

const toggleTransition = () => {
    console.log("toogle");
    document.body.classList.toggle('transition');
    document.documentElement.classList.toggle('transition');
    for (const element of cardElements) { element.classList.add('transition') }
    for (const element of logoElements) { element.classList.add('transition') }
    for (const element of switchElements) { element.classList.add('transitionSidebar') }

}

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Ecouteur d'évènements
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/

if (darkMode === 'enabled') { setDarkMode(true); }

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    setTimeout(toggleTransition, 500);
    if (darkMode !== 'enabled') {
        localStorage.setItem('darkMode', 'enabled');
        setDarkMode(true);
    } else {
        localStorage.setItem('darkMode', null);
        setDarkMode(false);
    }
    toggleTransition()
});

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Sources
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
// source : https://stackoverflow.com/questions/70570108/keep-toggle-switch-enabled-or-disabled-when-page-is-switched-or-refreshed