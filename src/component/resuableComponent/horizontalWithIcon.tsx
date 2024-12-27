import {
  StyleSheet,
  Text,
  Image,
  View,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';
import React from 'react';
import {images} from '../../constants';
import fonts from '../../constants/fonts';
import AppPressable from './appPressable';

type Props = {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  source?: ImageSourcePropType;
  onPress?: () => void;
  imgStyle?: ImageStyle;
};

const HorizontalWithIcon = (props: Props) => {
  return (
    <View style={[styles.rowContainer, props?.style]}>
      <Text style={[styles.textStyle, props?.textStyle]}>
        {props?.title ?? ''}
      </Text>
      <AppPressable onPress={props?.onPress}>
        <Image
          source={props?.source ?? images.circleBack}
          style={props?.imgStyle}
        />
      </AppPressable>
    </View>
  );
};

export default React.memo(HorizontalWithIcon);

const styles = StyleSheet.create({
  rowContainer: {flexDirection: 'row', alignItems: 'center'},
  textStyle: {
    color: 'black',
    fontFamily: fonts.Poppins.Light,
    fontSize: 15,
    marginRight: 16,
  },
});
