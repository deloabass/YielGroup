import React, { createContext, useContext } from 'react';
import { useLoading } from '../hooks/useLoading';
import LoadingPage from '../components/LoadingPage';

const LoadingContext = createContext();

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoadingContext must be used within a LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const { isLoading, loadingText, startLoading, stopLoading } = useLoading();

  return (
    <LoadingContext.Provider value={{ isLoading, loadingText, startLoading, stopLoading }}>
      {children}
      <LoadingPage isVisible={isLoading} loadingText={loadingText} />
    </LoadingContext.Provider>
  );
};