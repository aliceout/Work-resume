// check for saved 'langChange' and 'langChangeToggle' in localStorage
let langChange = localStorage.getItem('langChange');

const langChangeToggle = document.getElementById('language-checkbox');

// 1. Récupération de l'adrese actuelle
var urlcourante = document.location.href; 
// 2. Suppression de l'éventuel dernier slash de l'URL
var urlcourante = urlcourante.replace(/\/$/, "");
// 3. Gardons dans la variable page_en_cours uniquement la portion derrière le dernier slash de urlcourante
page_en_cours = urlcourante.substring (urlcourante.lastIndexOf( "/" )+1 ); 


//langue_en_cours = urlcourante.slice(22,24);   
//alert(langue_en_cours);

const englishLang = () => {
    // 4. Update langChange in localStorage
    localStorage.setItem('langChange', 'enabled');
    // 5. toggle the checkbox
    langChangeToggle.setAttribute('checked', true);
    if (page_en_cours != "fr") {
        // 6a. Redirection vers la langue demandée
        window.location.href = "/en/" +page_en_cours;
    } else {
        // 6b. Redirection vers la langue demandée
        window.location.href = "/en/index.php";
    }
};

const frenchLang = () => {
    // 4. Update langChange and toggle in localStorage 
    localStorage.setItem('langChange', null);
    // 5. Redirection vers la langue demandée
    window.location.href = "/fr/" +page_en_cours;
}


// Si l'utilisateur a déjà visité et activé langChange on l'active directement
// 1. On extrait la chaine de caractère correspondante à la langue
langue_en_cours = urlcourante.slice(22,24);
// 2. On lui dit de charger en anglais seulement si la checkbox est cliquée et que la langue n'est pas l'anglais
if (langChange === 'enabled') {
   if (langue_en_cours != 'en') {
        englishLang();
   } 
}
;


// Quand quelqu'un clique sur le bouton
langChangeToggle.addEventListener('click', () => {
    // On obtient les paramètres langChange
    langChange = localStorage.getItem('langChange');

    // s'il n'est pas actuellement activé, activez-le
    if (langChange !== 'enabled') {
        englishLang();
        // s'il a été activé, le désactiver
    } else {  
        frenchLang(); 
    }
});

//( langue_en_cours !== 'fr')
// Sources
// - http://memo-web.fr/categorie-javascript-48/
// - https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else
// - https://code.tutsplus.com/tutorials/how-to-change-the-url-in-javascript-redirecting--cms-37323