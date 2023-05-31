/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Définition des variables
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
const sidenav = document.getElementById("navList");                                                     // Définition de la sidenav
const navBtns = document.querySelectorAll("navBtns");                                                     // Définition du bouton

/**
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
·······  Fonction
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
*/
document.getElementById("openBtn").onclick = (event) =>{                                                          // Si le bouton d'ouverture est cliqué
        sidenav.classList.add("active");                                                               // La sidenav est affiché
        document.getElementById("openBtn").classList.remove("active");                                                       // Le bouton est affiché
        closeBtn.classList.add("active");                                                              // Le bouton est masqué
}
        document.getElementById("closeBtn").onclick = (event) =>{                                                        // Si le bouton de femrture est cliqué
        sidenav.classList.remove("active");                                                            // La sidenav est masqué
        openBtn.classList.add("active");                                                               // Le bouton est affiché
        document.getElementById("closeBtn").classList.remove("active");                                                       // Le bouton est masqué
    }
