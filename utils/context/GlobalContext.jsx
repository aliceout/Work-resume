import React, { createContext, useContext, useState, useSyncExternalStore } from "react";

export const GlobalContext = createContext();

const subscribe = () => () => {};
const getIsAliceOutSnapshot = () =>
  window.location.href.includes("aliceout.work");
const getIsAliceOutServerSnapshot = () => false;

export function GlobalContextProvider({ children }) {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const isAliceOut = useSyncExternalStore(
    subscribe,
    getIsAliceOutSnapshot,
    getIsAliceOutServerSnapshot
  );

  const contextValue = {
    hamburgerMenuIsOpen,
    setHamburgerMenuIsOpen,
    isAliceOut,
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
