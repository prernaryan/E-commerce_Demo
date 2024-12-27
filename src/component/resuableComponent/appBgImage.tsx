import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {images, PercentageConstants} from '../../constants';

const styles = StyleSheet.create({
  imageStyle: {
    width: PercentageConstants.PERCENT_100,
    height: PercentageConstants.PERCENT_100,
  },
});

interface AppBgImageProps {
  children: React.ReactNode;
  source?: ImageSourcePropType;
  extraStyle?: StyleProp<ViewStyle>;
}

const AppBgImage: React.FC<AppBgImageProps> = ({
  children,
  source,
  extraStyle,
}) => {
  const image = source ?? images.appBackgroundImage;
  return (
    <ImageBackground source={image} style={[styles.imageStyle, extraStyle]}>
      {children}
    </ImageBackground>
  );
};

export default React.memo(AppBgImage);
