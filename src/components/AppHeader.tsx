import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {fontPixel, widthPixel} from '../utils/responsive';
import {ConstNumber, GlobalStyleValues, images} from '../constants';

import {goBack} from '../services/navigationService';

interface AppHeaderProps {
  title?: string;
  rightIcon?: ImageSourcePropType;
  leftIcon?: ImageSourcePropType;
  onLeftIcon?: () => void;
  onRightIcon?: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  rightIcon,
  leftIcon,
  onLeftIcon,
  onRightIcon,
}) => {
  const handleBackPress = React.useCallback(() => {
    if (onLeftIcon) {
      onLeftIcon();
    } else {
      goBack();
    }
  }, [onLeftIcon]);
  return (
    <View style={[styles.container]}>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.bellIconWrapper}
          onPress={handleBackPress}>
          <Image source={leftIcon ?? images.BACK_ARROW} />
        </TouchableOpacity>
      </View>
      <View>{title && <Text style={styles.title}>{title}</Text>}</View>
      <View style={styles.view}>
        {rightIcon && (
          <TouchableOpacity
            style={styles.bellIconWrapper}
            onPress={onRightIcon}>
            <Image source={rightIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default React.memo(AppHeader);

const styles = StyleSheet.create({
  container: {
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
  },
  bellIconWrapper: {
    width: widthPixel(ConstNumber.VALUE_48),
    height: widthPixel(ConstNumber.VALUE_48),
    borderRadius: widthPixel(ConstNumber.VALUE_24),
    backgroundColor: '#F8F7F7',
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
  },
  title: {
    fontSize: fontPixel(ConstNumber.VALUE_16),
    fontWeight: 'bold',
    color: '#000',
  },
  view: {
    width: widthPixel(ConstNumber.VALUE_48),
    height: widthPixel(ConstNumber.VALUE_48),
  },
});
