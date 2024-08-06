import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { Text, useColorScheme, View } from 'react-native';

import IndexNavigation from './navigation/IndexNavigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme } from './core/theme/darkTheme';
import { dataSource } from './entities';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  useEffect(() => {
    const connect = async () => {
      await dataSource.initialize();
    };

    connect();
  }, []);
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={darkTheme}>
        {/* <SafeAreaView> */}
        <IndexNavigation />
        {/* </SafeAreaView> */}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
