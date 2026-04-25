import React, { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  const contextValue = {
    hamburgerMenuIsOpen,
    setHamburgerMenuIsOpen,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
