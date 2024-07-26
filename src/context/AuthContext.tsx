import { privateRoutes } from '@/core/constans/auth/auth';
import { useRootNavigation } from '@/hooks/useRootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
  useEffect,
} from 'react';

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
  currentRoute: string | null;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  currentRoute = '',
}) => {
  const [token, setToken] = useState<string | null>(null);

  const navigation = useRootNavigation();

  const closeSession = async () => {
    const _resp = await AsyncStorage.removeItem('token');
    return _resp;
  };

  useEffect(() => {
    const fetchToken = async () => {
      if (!currentRoute) {
        return;
      }

      if (!token) {
        try {
          const tokenStorage = await AsyncStorage.getItem('token');
          if (privateRoutes.includes(currentRoute) && !tokenStorage) {
            navigation.navigate('Login');
          } else {
            setToken(tokenStorage);
          }
        } catch (error) {
          console.error('Failed to fetch the token', error);
        }
      } else {
        if (!privateRoutes.includes(currentRoute)) {
          navigation.navigate('HomeScreen');
        }
      }
    };

    fetchToken();
  }, [token, currentRoute]);

  const data = useMemo(() => {
    return {
      token,
      setToken,
      closeSession,
    };
  }, [token, setToken, closeSession]);

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

// Hook personalizado para usar el contexto de autenticación
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};
