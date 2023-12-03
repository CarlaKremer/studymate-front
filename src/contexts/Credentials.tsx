'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ICredentialsContext {
  credentials: string;
  setCredentials: React.Dispatch<React.SetStateAction<string>>;
}

interface CredentialsProviderProps {
  children: ReactNode;
}
const CredentialsContext = createContext<ICredentialsContext | undefined>(undefined);

export const CredentialsProvider: React.FC<CredentialsProviderProps> = ({ children }) => {
  const [credentials, setCredentials] = useState<string>('');

  return (
    <CredentialsContext.Provider value={{ credentials, setCredentials }}>
      {children}
    </CredentialsContext.Provider>
  );
};

export const useCredentials = (): ICredentialsContext => {
  const context = useContext(CredentialsContext);
  if (!context) {
    throw new Error('useCredentials must be used within a CredentialsProvider');
  }
  return context;
};