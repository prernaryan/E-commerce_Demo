import React from 'react';
import {View} from 'react-native';
import MainNavigation from './src/navigation/mainNavigation';
import {ImageProvider} from './src/contextApi/imageContext';

const App = () => {
  return (
    <ImageProvider>
      <View style={{flex: 1}}>
        <MainNavigation />
      </View>
    </ImageProvider>
  );
};

export default App;
