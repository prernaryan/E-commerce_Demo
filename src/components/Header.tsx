import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ConstNumber, GlobalStyleValues, images, RouteName} from '../constants';
import {fontPixel, widthPixel} from '../utils/responsive';
import {navigate} from '../services/navigationService';

const Header = ({
  greetings,
  name,
  cartsLength,
}: {
  greetings: string;
  name: string;
  cartsLength: number;
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={images.PROFILE_PIC} />
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>{greetings}</Text>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.bellIconWrapper}
        onPress={() => navigate(RouteName.ADD_TO_CART)}>
        <Image
          source={images.CART}
          style={{
            height: widthPixel(ConstNumber.VALUE_20),
            width: widthPixel(ConstNumber.VALUE_20),
          }}
        />
        <Text style={styles.cartCount}>{cartsLength}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
    paddingHorizontal: widthPixel(ConstNumber.VALUE_8),
  },
  profileContainer: {
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.CENTER,
  },
  cartCount: {
    fontSize: fontPixel(ConstNumber.VALUE_12),
    fontWeight: 'bold',
    color: 'black',
    position: GlobalStyleValues.ABSOLUTE,
    backgroundColor: 'white',
    borderRadius: widthPixel(ConstNumber.VALUE_50),
    textAlign: GlobalStyleValues.CENTER,
    top: -5,
    right: -2,
    padding: widthPixel(ConstNumber.VALUE_5),
  },
  textContainer: {
    marginLeft: widthPixel(ConstNumber.VALUE_8),
  },
  greetingText: {
    fontSize: fontPixel(ConstNumber.VALUE_12),
    color: '#555',
  },
  nameText: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    fontWeight: '600',
  },
  bellIconWrapper: {
    width: widthPixel(ConstNumber.VALUE_48),
    height: widthPixel(ConstNumber.VALUE_48),
    borderRadius: widthPixel(ConstNumber.VALUE_24),
    backgroundColor: '#F8F7F7',
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
  },
});
