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
    // 4. Display black & white picture
    document.getElementById('grey-picture').style.display ='block';
    // 5. Hide color picture
    document.getElementById('color-picture').style.display ='none';
}

const disableDarkMode = () => {
    // 1. Remove the class from the body & html
    document.body.classList.remove('dark-mode');
    document.documentElement.classList.remove('dark-mode');
    // 2. Update darkMode and toggle in localStorage 
    localStorage.setItem('darkMode', null);
    // 3. Display color picture
    document.getElementById('color-picture').style.display ='block';
    // 4. Hide black & white picture
    document.getElementById('grey-picture').style.display ='none';
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