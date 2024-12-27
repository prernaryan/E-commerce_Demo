import React, {ReactNode} from 'react';
import {Text, TextProps} from 'react-native';
import {themes} from '../../constants';

interface Props extends TextProps {
  children?: ReactNode;
}

export const AppText = ({style, ...props}: Readonly<Props>): JSX.Element => {
  return (
    <Text
      style={[{color: themes.dark.black}, style]}
      {...props}
      allowFontScaling={true}>
      {props?.children}
    </Text>
  );
};
