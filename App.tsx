import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import {Provider as PaperProvider} from 'react-native-paper';

import { customTheme } from './src/theme/theme';

import { PaperProvider } from 'react-native-paper';
import MainNavigation from './src/navigation/MainNavigation';
import { ThemeProvider } from './src/theme/appTheme';

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={customTheme}>
      <SafeAreaProvider>
        <ThemeProvider>
          <MainNavigation />
        </ThemeProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
