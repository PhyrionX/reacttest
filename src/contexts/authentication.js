import { createContext } from 'react';

export const AuthenticationContext = createContext([[], () => {} ]);

AuthenticationContext.displayName = 'AuthenticationContext';