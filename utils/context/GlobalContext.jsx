import React, { createContext, useContext, useState, useEffect } from "react";


// Créez un contexte pour GlobalContext
export const GlobalContext = createContext();

// Créez un composant fournisseur qui utilisera le contexte
export function GlobalContextProvider({ children }) {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const [isAliceOut, setIsAliceOut] = useState(false);

  useEffect(() => {
    // Vérifiez si l'URL contient "aliceosdel.work" ou "aliceout.work"
    const currentUrl = window.location.href;
    console.log("currentUrl", currentUrl);
    setIsAliceOut(
      currentUrl.includes("aliceout.work")
    );
  }, []);
  console.log("isAliceOut", isAliceOut);

  // Fournissez la valeur du contexte avec les données nécessaires
  const contextValue = {
    hamburgerMenuIsOpen,
    setHamburgerMenuIsOpen,
    isAliceOut,
    setIsAliceOut,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

// Créez un hook pour utiliser plus facilement le contexte dans d'autres composants
export function useGlobalContext() {
  return useContext(GlobalContext);
}
