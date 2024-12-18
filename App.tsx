import React from 'react';
import {ThemeProvider} from './src/contextApi/appTheme';

import {View} from 'react-native';
import MainNavigation from './src/navigation/mainNavigation';

const App = () => {
  return (
    <ThemeProvider>
      <View style={{flex: 1}}>
        <MainNavigation />
      </View>
    </ThemeProvider>
  );
};

export default App;
