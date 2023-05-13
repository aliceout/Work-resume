/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Définition des variables
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.getElementById('darkmode-checkbox');
const lightElements = document.getElementsByClassName(".lightMode-elements");
const darkElements = document.getElementsByClassName(".darkMode-elements");
const cardElements = document.getElementsByClassName(".card");
const logoElements = document.getElementsByClassName(".logo");
const switchElements = document.getElementsByClassName(".switch");

if (darkMode === 'enabled') { setDarkMode(true); }

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Fonctions
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
const app = {
    setDarkMode: (enable) => {
        const body = document.body;
        const html = document.documentElement;

        body.classList.toggle('dark-mode', enable);
        html.classList.toggle('dark-mode', enable);
        darkElements.forEach(element => element.style.display = enable ? "block" : "none");
        lightElements.forEach(element => element.style.display = enable ? "none" : "block");
    },

    toggleTransition: () => {
        document.body.classList.toggle('transition');
        document.documentElement.classList.toggle('transition');
        cardElements.forEach(element => element.classList.toggle('transition'));
        logoElements.forEach(element => element.classList.toggle('transition'));
        switchElements.forEach(element => element.classList.toggle('transitionSidebar'));
    },

    addListenerToActions: () => {
        darkModeToggle.addEventListener('click', () => {
            console.log("Clic");
            darkMode = localStorage.getItem('darkMode');
            
            if (darkMode !== 'enabled') {
                console.log('Dark mode is enabled');
                app.toggleTransition();
                localStorage.setItem('darkMode', 'enabled');
                app.setDarkMode(true);
                app.toggleTransition();
            } else {
                console.log('Dark mode is disabled');
                app.toggleTransition();
                localStorage.setItem('darkMode', null);
                app.setDarkMode(false);
                app.toggleTransition();
            }
        });
    },

    init: () => {
        app.addListenerToActions();
    }
};

app.init

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Sources
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
// source : https://stackoverflow.com/questions/70570108/keep-toggle-switch-enabled-or-disabled-when-page-is-switched-or-refreshed