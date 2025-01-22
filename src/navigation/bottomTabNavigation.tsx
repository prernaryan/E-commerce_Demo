import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import {images, RouteName} from '../constants';
import Favourite from '../screens/Favourite';
import CartScreen from '../screens/CartScreen';
import Profile from '../screens/Profile';
import Category from '../screens/Category';

const Tab = createBottomTabNavigator();

const TabIcon = ({source, focused, color}) => (
  <View style={styles.iconContainer}>
    <Image source={source} style={[styles.icon, {tintColor: color}]} />
    <View
      style={[styles.activeLine, !focused && {backgroundColor: 'transparent'}]}
    />
  </View>
);

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#004CFF',
      }}>
      <Tab.Screen
        name={RouteName.DASHBOARD}
        component={Dashboard}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabIcon source={images.homeIcon} focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.FAVOURITE}
        component={Favourite}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabIcon
              source={images.favourite}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.CATEGORY}
        component={Category}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabIcon source={images.category} focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.CART_SCREEN}
        component={CartScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabIcon source={images.cartIcon} focused={focused} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabIcon
              source={images.profileIcon}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeLine: {
    height: 3,
    width: 30,
    backgroundColor: '#000',
    marginTop: 4,
    borderRadius: 2,
  },
});
