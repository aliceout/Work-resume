// check for saved 'darkMode' and 'darkModeToggle' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.getElementById('darkmode-checkbox');

const enableDarkMode = () => {
    // 1. Add the class to the body & html
    document.body.classList.add('dark-mode');
    document.documentElement.classList.add('dark-mode');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
    // 3. toggle the checkbox
    darkModeToggle.setAttribute('checked', true);
    // 4. Hide light-mode elements
    for (const element of document.querySelectorAll(".lightMode-elements")) { element.style.display = "none"; }
    // 5. Show dark-mode elements
    for (const element of document.querySelectorAll(".darkMode-elements")) { element.style.display = "block"; }

}

const disableDarkMode = () => {
    // 1. Remove the class from the body & html
    document.body.classList.remove('dark-mode');
    document.documentElement.classList.remove('dark-mode');
    // 2. Update darkMode and toggle in localStorage 
    localStorage.setItem('darkMode', null);
    // 3. Hide dark-mode elements
    for (const element of document.querySelectorAll(".darkMode-elements")) { element.style.display = "none"; }
    // 4. Show light-mode elements
    for (const element of document.querySelectorAll(".lightMode-elements")) { element.style.display = "block"; }

}

const toggleTransition = () => {
    document.body.classList.toggle('transition');
    document.documentElement.classList.toggle('transition');
    for (const element of document.querySelectorAll(".card")) { element.classList.toggle('transition') }
    for (const element of document.querySelectorAll(".logo")) { element.classList.toggle('transition') }
    for (const element of document.querySelectorAll(".switch")) { element.classList.toggle('transitionSidebar') }
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode');
    console.log(darkMode)
    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
        toggleTransition();
        enableDarkMode();
        setTimeout(toggleTransition, 500);
        // if it has been enabled, turn it off  
    } else {
        toggleTransition();
        disableDarkMode();
        setTimeout(toggleTransition, 500);
    }
});

// source : https://stackoverflow.com/questions/70570108/keep-toggle-switch-enabled-or-disabled-when-page-is-switched-or-refreshed