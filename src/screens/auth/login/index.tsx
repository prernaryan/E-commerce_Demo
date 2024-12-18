import {Button, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../../contextApi/appTheme';

const Login = () => {
  const {colors, toggleTheme} = useTheme();

  return (
    <View style={{flex: 1, marginTop: 100, backgroundColor: colors.background}}>
      <Text>Login</Text>
      <Button title="Login" color={colors.primary} onPress={toggleTheme} />
    </View>
  );
};

export default Login;
