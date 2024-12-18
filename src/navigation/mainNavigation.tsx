import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ConstNumber} from '../constants';
import {navigationRef} from '../services/navigationService';
import {RouteName, SCREENS} from '../constants/routeName';
import {RootStackParamList} from '../type/navigation.type';

const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = (): React.JSX.Element => {
  const onReadyNavigation = React.useCallback((): void => {
    setTimeout(() => {
      //   SplashScreen.hide();
    }, ConstNumber.VALUE_3000);
  }, []);
  const RenderNavigationScreens = React.useMemo((): React.JSX.Element[] => {
    return Object.keys(SCREENS).map((item: string) => (
      <Stack.Screen
        key={`Screen-${item}`}
        //@ts-ignore
        name={item}
        //@ts-ignore
        component={SCREENS[item]}
      />
    ));
  }, []);

  return (
    <NavigationContainer onReady={onReadyNavigation} ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={RouteName.LOGIN}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        {RenderNavigationScreens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(MainNavigator);
