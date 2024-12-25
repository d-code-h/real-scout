import React, { createContext, useContext, ReactNode } from 'react';
import { getUser } from './appwrite';
import { useAppwrite } from './useAppwrite';
import { GlobalContextType } from '@/types';

// The context and set default value
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// The Global state wrapper
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: user = null,
    loading,
    refetch,
  } = useAppwrite({
    fn: getUser,
  });

  // Store the boolean state of the user object
  const isLogged = !!user;

  return (
    <GlobalContext.Provider value={{ isLogged, user, loading, refetch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Handle Global context usage
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error('useGlobalContext must be used within a GlobalProvider');

  return context;
};

export default GlobalProvider;
