// index.js

import React from "react";
import { IconsProvider } from "./IconsContext";
import { GlobalContextProvider } from "./GlobalContext"; // Importez GlobalContextProvider

function AppProviders({ children }) {
  return (
    <IconsProvider>
      <GlobalContextProvider>
        {children}
      </GlobalContextProvider>
    </IconsProvider>
  );
}

export default AppProviders;
