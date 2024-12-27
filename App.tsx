import React from 'react';
import {ThemeProvider} from './src/contextApi/appTheme';
import {View} from 'react-native';
import MainNavigation from './src/navigation/mainNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider>
        <View style={{flex: 1}}>
          <MainNavigation />
        </View>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
