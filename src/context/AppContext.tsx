import type React from 'react';
import { type ReactNode, createContext, useContext, useState } from 'react'

interface AppContextProps {
  loading: boolean;
  results: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setResults: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState("");

  return (
    <AppContext.Provider value={{ loading, results, setLoading, setResults }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
