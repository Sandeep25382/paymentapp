import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import {Provider as PaperProvider} from 'react-native-paper';

import { customTheme } from './src/theme/theme';

import { PaperProvider } from 'react-native-paper';
import MainNavigation from './src/navigation/MainNavigation';

function App(): React.JSX.Element {
  return (
    <PaperProvider theme={customTheme}>
      <SafeAreaProvider>
        {/* <BottomNavigationContainer /> */}
        <MainNavigation />
        {/* <CustomInput /> */}
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;