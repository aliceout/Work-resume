/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Définition des variables
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
const sidenav = document.getElementById("navList");                                                     // Définition de la sidenav
const navBtns = document.getElementById("navBtns");                                                     // Définition du bouton

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Fonction
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
navBtns.onclick = (event) => {                                                                         // Fonction d'événement au clic
    if (event.target.id === "openBtn") {                                                               // Si le bouton d'ouverture est cliqué
        sidenav.classList.add("active");                                                               // La sidenav est affiché
        event.target.classList.remove("active");                                                       // Le bouton est affiché
        closeBtn.classList.add("active");                                                              // Le bouton est masqué
    } else if (event.target.id === "closeBtn") {                                                       // Si le bouton de femrture est cliqué
        sidenav.classList.remove("active");                                                            // La sidenav est masqué
        openBtn.classList.add("active");                                                               // Le bouton est affiché
        event.target.classList.remove("active");                                                       // Le bouton est masqué
    }
};
