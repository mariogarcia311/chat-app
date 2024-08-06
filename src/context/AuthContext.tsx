import { validateOtpApi } from '@/api/apiLogin';
import { privateRoutes } from '@/core/constants/auth/auth';
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
import { useLoadingContext } from './LoadingContext';
import { View } from 'react-native';
import { User } from '@/api/interfaces/apiLogin.interfaces';
import useMessagesStore from '@/store/useMessagesStore';

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  closeSession: Function;
  validateOtp: Function;
  user: User | null;
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
  const { setLoading } = useLoadingContext();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const connectSocket = useMessagesStore(state => state.connect);
  const disconnectSocket = useMessagesStore(state => state.disconnect);

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
      try {
        if (!token) {
          const tokenStorage = await AsyncStorage.getItem('token');
          const stringUserStorage = await AsyncStorage.getItem('user');
          const userStorage = stringUserStorage
            ? JSON.parse(stringUserStorage)
            : null;
          if (privateRoutes.includes(currentRoute) && !tokenStorage) {
            navigation.navigate('Login');
          } else {
            setToken(tokenStorage);
            setUser(userStorage);
          }
        } else {
          if (!privateRoutes.includes(currentRoute)) {
            navigation.navigate('HomeScreen');
          }
        }
      } catch (error) {
        console.error('Failed to fetch the token', error);
      } finally {
        setTimeout(() => {
          setAuthLoading(false);
        }, 500);
      }
    };

    fetchToken();
  }, [token, currentRoute]);

  useEffect(() => {
    user?.completePhone &&
      token &&
      connectSocket({ token, myPhone: user.completePhone });
    return () => {
      disconnectSocket();
    };
  }, [token, user?.completePhone]);

  const validateOtp = async ({ userId, code }: any) => {
    try {
      setLoading(true);
      const resp = await validateOtpApi({ userId, code });

      if (resp.data.token) {
        await AsyncStorage.setItem('token', resp.data.token);
        await AsyncStorage.setItem('user', JSON.stringify(resp.data.user));
        setToken(resp.data.token);
        setUser(resp.data.user);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const data = useMemo(() => {
    return {
      token,
      setToken,
      closeSession,
      validateOtp,
      user,
    };
  }, [token, setToken, closeSession, user]);
  return (
    <AuthContext.Provider value={data}>
      <View style={{ flex: 1, opacity: authLoading ? 0 : 1 }}>{children}</View>
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};
