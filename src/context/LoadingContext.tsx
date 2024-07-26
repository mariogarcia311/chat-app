import { Loading } from '@/components/shared/Loading/Loading';

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
} from 'react';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

interface LoadingProviderProps {
  children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setLoading = (_val: boolean) => setIsLoading(_val);

  const data = useMemo(() => {
    return {
      isLoading,
      setLoading,
    };
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={data}>
      {children}
      {isLoading && <Loading />}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading debe usarse dentro de un LoadingProvider');
  }
  return context;
};
