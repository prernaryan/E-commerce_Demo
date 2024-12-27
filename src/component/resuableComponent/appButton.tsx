import {StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import AppPressable from './appPressable';
import fonts from '../../constants/fonts';
import {ConstNumber, StyleBase, themes} from '../../constants';
import {fontPixel} from '../../utils/responsive';

type Props = {
  onPress?: () => void;
  title?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

const AppButton = (props: Props) => {
  return (
    <AppPressable
      onPress={props?.onPress}
      style={[styles.container, props?.style, StyleBase.inCenter]}>
      <Text
        style={[props?.textStyle, styles.textStyle, StyleBase.textAlignCenter]}>
        {props?.title ?? 'Button'}
      </Text>
    </AppPressable>
  );
};

export default React.memo(AppButton);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#004CFF',
  },
  textStyle: {
    color: themes.dark.white,
    fontSize: fontPixel(ConstNumber.VALUE_22),
    fontFamily: fonts.NunitoSans.Light,
  },
});
