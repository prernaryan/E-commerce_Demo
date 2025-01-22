import {StyleSheet, Text, TextStyle, ViewStyle, View} from 'react-native';
import React from 'react';
import AppPressable from './appPressable';
import fonts from '../../constants/fonts';
import {ConstNumber, StyleBase, themes} from '../../constants';
import {fontPixel} from '../../utils/responsive';

type Props = {
  onPress?: () => void;
  title?: string;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode | ViewStyle | ViewStyle[];
};

const AppButton = (props: Props) => {
  return (
    <AppPressable
      onPress={props?.onPress}
      style={[styles.container, props?.style]}>
      {props?.leftIcon}
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <Text
          style={[
            styles.textStyles, // Default styles first
            StyleBase.textAlignCenter,
            props?.textStyle, // Props styles last to ensure override
          ]}>
          {props?.title ?? 'Button'}
        </Text>
      </View>
      {props?.rightIcon}
    </AppPressable>
  );
};

export default React.memo(AppButton);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#004CFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyles: {
    color: themes.dark.white,
    fontSize: fontPixel(ConstNumber.VALUE_22),
    fontFamily: fonts.NunitoSans.Light,
    textAlign: 'center',
  },
});
