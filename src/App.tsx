import React from 'react';
import type { PropsWithChildren } from 'react';
import { Text, useColorScheme, View } from 'react-native';

import IndexNavigation from './navigation/IndexNavigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme } from './core/theme/darkTheme';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
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
