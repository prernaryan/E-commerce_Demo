import React from 'react';
import {ThemeProvider} from './src/contextApi/appTheme';
import {View} from 'react-native';
import MainNavigation from './src/navigation/mainNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <ThemeProvider>
          <View style={{flex: 1}}>
            <MainNavigation />
          </View>
        </ThemeProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
