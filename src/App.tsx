import React from 'react';
import type { PropsWithChildren } from 'react';
import { Text, useColorScheme, View } from 'react-native';

import IndexNavigation from './navigation/IndexNavigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      {/* <SafeAreaView> */}
      <IndexNavigation />
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}

export default App;
