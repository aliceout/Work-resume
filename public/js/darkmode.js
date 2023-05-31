/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Définition des variables
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
let darkMode            = localStorage.getItem('darkMode');                     // On récupère la valeur de la variable darkMode
const darkModeToggle    = document.getElementById('darkmode-checkbox');         // On récupère le bouton
const lightElements     = document.querySelectorAll(".lightMode-elements");     // On récupère les éléments
const darkElements      = document.querySelectorAll(".darkMode-elements");      // On récupère les éléments
const cardElements      = document.querySelectorAll(".card");                   // On récupère les éléments
const logoElements      = document.querySelectorAll(".logo");                   // On récupère les éléments
const switchElements    = document.querySelectorAll(".switch");                 // On récupère les éléments

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Fonctions
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
const setDarkMode = (enable) => {                                                           // On modifie la valeur de la variable darkMode
    const body = document.body;                                                             // On récupère le body pour en faire une variable
    const html = document.documentElement;                                                  // On récupère le html pour en faire une variable

    body.classList.toggle('dark-mode', enable);                                             // On modifie une classe sur le body
    html.classList.toggle('dark-mode', enable);                                             // On modifie une classe sur le html
    darkElements.forEach(element => element.style.display = enable ? "block" : "none");     // On modifie une classe sur les élements darkelements
    lightElements.forEach(element => element.style.display = enable ? "none" : "block");    // On modifie une classe sur les élements lightelements
}

const toggleTransition = () => {                                                            // On modifie la valeur de la variable darkMode
    document.body.classList.toggle('transition_2');                                           // On ajoute un effet de transition
    document.documentElement.classList.toggle('transition_2');                                // On ajoute un effet de transition
    cardElements.forEach(element => element.classList.toggle('transition_2'));                // On ajoute un effet de transition
    switchElements.forEach(element => element.classList.toggle('transition_2'));       // On ajoute un effet de transition
}

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Ecouteur d'évènements
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
if (darkMode === 'enabled') { setDarkMode(true); }      // Si la valeur de la variable est "enabled" alors on déclenche la fonction

darkModeToggle.addEventListener('click', () => {        // Au clic on déclenche 
    darkMode = localStorage.getItem('darkMode');        // On récupère la valeur de l'état du darkmode dans le localstorage
    setTimeout(toggleTransition, 500);                  // On déclenche la fonction qui ajoute un effet de transition
    if (darkMode !== 'enabled') {                       // Si la valeur de la variable est différente de "enabled"
        localStorage.setItem('darkMode', 'enabled');    // On modifie la valeur de darkmode suite au clic
        setDarkMode(true);                              // On déclenche la fonction
    } else {                                            // Sinon
        localStorage.setItem('darkMode', null);         // On modifie la valeur de darkmode suite au clic
        setDarkMode(false);                             // On déclenche la fonction
    }
    toggleTransition()                                  // On modifie la valeur de la variable
});

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Sources
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
// source : https://stackoverflow.com/questions/70570108/keep-toggle-switch-enabled-or-disabled-when-page-is-switched-or-refreshed