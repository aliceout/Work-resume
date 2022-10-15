// check for saved 'darkMode' and 'darkModeToggle' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.getElementById('darkmode-checkbox');


const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('dark-mode');
    document.documentElement.classList.add('dark-mode');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
    // 3. toggle the checkbox
    darkModeToggle.setAttribute('checked', true);
}

const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('dark-mode');
    document.documentElement.classList.remove('dark-mode');
    // 2. Update darkMode and toggle in localStorage 
    localStorage.setItem('darkMode', null);
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

    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
        enableDarkMode();
        // if it has been enabled, turn it off  
    } else {  
        disableDarkMode(); 
    }
});

// source : https://stackoverflow.com/questions/70570108/keep-toggle-switch-enabled-or-disabled-when-page-is-switched-or-refreshed