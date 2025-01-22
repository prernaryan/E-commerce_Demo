import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ConstNumber, GlobalStyleValues, StyleBase} from '../../constants';
import {ViewStyle} from 'react-native';

type KeyboardScrollViewType = {
  children: React.ReactNode;
  extraStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle | ViewStyle[];
};
export const KeyboardScrollView = React.memo(
  ({
    children,
    extraStyle,
    contentContainerStyle,
  }: KeyboardScrollViewType): React.JSX.Element => {
    return (
      <KeyboardAwareScrollView
        style={[StyleBase.flex1, extraStyle]}
        enableOnAndroid
        alwaysBounceHorizontal={false}
        contentContainerStyle={contentContainerStyle}
        alwaysBounceVertical={false}
        extraScrollHeight={ConstNumber.VALUE_10}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        keyboardShouldPersistTaps={GlobalStyleValues.HANDLED}>
        {children}
      </KeyboardAwareScrollView>
    );
  },
);
