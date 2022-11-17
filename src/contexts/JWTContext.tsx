// THIRD-PARTY IMPORTS
import jwtDecode from 'jwt-decode';
import React, { createContext, useReducer } from 'react';

// PROJECT IMPORTS
import authReducer from '~/store/authReducer';
import axiosServices from '~/utils/axios';
import { InitialLoginContextProps, JWTContextType } from '~/types/auth';
import { KeyedObject } from '~/types';

const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const verifyToken: (st: string) => boolean = (authToken) => {
  if (!authToken) {
    return false;
  }
  const decoded: KeyedObject = jwtDecode(authToken);
  return decoded.exp > Date.now() / 1000;
};

const setSession = (authToken?: string | null) => {
  if (authToken) {
    localStorage.setItem('authToken', authToken);
    axiosServices.defaults.headers.common.Authorization = `Bearer ${authToken}`;
  } else {
    localStorage.removeItem('serviceToken');
    delete axiosServices.defaults.headers.common.Authorization;
  }
};

const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <JWTContext.Provider value={{ ...state }}>{children}</JWTContext.Provider>;
};

export default JWTContext;
