import { useState, useEffect } from 'react';
import { getIdToken } from '../authService';

export const useIsAuthenticated = () => {
  const idToken = getIdToken();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (idToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [idToken]);

  return isAuthenticated;
}
