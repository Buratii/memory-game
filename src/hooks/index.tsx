import React, { ReactNode } from 'react';

import { CardProvider } from './card';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
  <CardProvider>
    {children}
  </CardProvider>
);

export default AppProvider;
