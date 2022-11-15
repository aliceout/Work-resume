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
    const lightModeHide = document.querySelectorAll(".lightMode-elements");
    for (let i = 0; i < lightModeHide.length; i++) {
        lightModeHide[i].style.display = "none";}
    // 5. Show dark-mode elements
    const darkModeShow = document.querySelectorAll(".darkMode-elements");
    for (let i = 0; i < darkModeShow.length; i++) {
        darkModeShow[i].style.display = "block";}
    
}

const disableDarkMode = () => {
    // 1. Remove the class from the body & html
    document.body.classList.remove('dark-mode');
    document.documentElement.classList.remove('dark-mode');
    // 2. Update darkMode and toggle in localStorage 
    localStorage.setItem('darkMode', null);
    // 3. Hide dark-mode elements
    const darkModeHide = document.querySelectorAll(".darkMode-elements");
    for (let i = 0; i < darkModeHide.length; i++) {
        darkModeHide[i].style.display = "none"; }
    // 4. Show light-mode elements
    const lightModeShow = document.querySelectorAll(".lightMode-elements");
    for (let i = 0; i < lightModeShow.length; i++) {
        lightModeShow[i].style.display = "block";}
    
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