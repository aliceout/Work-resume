import { createContext } from "react";

import React from 'react';
import { IconsProvider } from './IconsContext';

function AppProviders({ children }) {
  return (
    <IconsProvider>
        {children}
    </IconsProvider>
  );
}

export default AppProviders;
