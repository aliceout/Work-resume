const langChangeToggle = document.getElementById('language-checkbox');                                                  // Obtenir l'état de la chebox
const currentURL = document.location.href.replace(/\/$/, "");                                                           // Obtenir l'URL courante
console.log("CurrentURL: " + currentURL);
const domain = (window.location.host == "localhost") ? "http://localhost/work" : "https://" + window.location.host;     // Obtenir le domaine
console.log("Domain: " + domain);
const currentPage = currentURL.substring(currentURL.lastIndexOf("/") + 1);                                              // Obtenir la page courante
console.log("CurrentPage: " + currentPage);
const currentLanguage = (window.location.host == "localhost") ? currentURL.slice(22, 24) : currentURL.slice(24, 26);    // Obtenir la langue courante
console.log("CurrentLanguage: " + currentLanguage);
const langChange = localStorage.getItem('langChange');                                                                  // Obtenir la valeur stockée de la langue

const englishLang = () => {
    localStorage.setItem('langChange', 'enabled');
    langChangeToggle.setAttribute('checked', true);

    if (currentLanguage == "fr") {

        const langModeShow = document.querySelectorAll(".langLabel");
        for (let i = 0; i < langModeShow.length; i++) {
            langModeShow[i].style.display = "block";
        }

        if (currentPage != "fr") {
            window.location.href = domain + "/en/" + currentPage;
        } else if (currentPage == "fr") {
            window.location.href = domain + "/en/index.php";
        }
    } else if (currentLanguage == "en") { return }
};

const frenchLang = () => {
    localStorage.setItem('langChange', null);
    langChangeToggle.setAttribute('checked', false);

    if (currentLanguage == "en") {
        console.log("Détection langue anglaise");
        if (currentPage != "en") {
            console.log("Page courante n'est pas EN");
            window.location.href = domain + "/fr/" + currentPage;

        } else if (currentPage == "en") {
            console.log("Page courante est EN");
            window.location.href = domain + "/fr/index.php";
        }
    } else if (currentLanguage == "fr") { return }
};

if (currentLanguage == "en") { document.getElementById('language-checkbox').checked = true; };

if (langChange === 'enabled' && currentLanguage != 'en') { englishLang(); };

document.getElementById('language-checkbox').addEventListener('click', () => {
    console.log("Détection du clic");
    if (localStorage.getItem('langChange') !== 'enabled') {
        console.log("lancement changement langue vers EN");
        englishLang();
    } else {
        console.log("lancement changement langue vers FR");
        frenchLang();
    }
});

// Sources
// - http://memo-web.fr/categorie-javascript-48/
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else
// - https://code.tutsplus.com/tutorials/how-to-change-the-url-in-javascript-redirecting--cms-37323