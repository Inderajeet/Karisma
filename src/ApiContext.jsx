// src/context/ApiContext.js
import React, { createContext, useState, useContext } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiLoading, setApiLoading] = useState(false);
  
  return (
    <ApiContext.Provider value={{ apiLoading, setApiLoading }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};