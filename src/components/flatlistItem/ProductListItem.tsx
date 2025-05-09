import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  fontPixel,
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../../utils/responsive';
import {ConstNumber, GlobalStyleValues, RouteName} from '../../constants';
import {navigate} from '../../services/navigationService';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavourite} from '../../redux/slice/shoppingSlice';

const ProductListItem = ({
  item,
  allList = false,
}: {
  item: any;
  allList?: boolean;
}): React.JSX.Element => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const currentProduct = products.find(p => p.id === item.id);
  return (
    <TouchableOpacity
      style={[styles.card, allList && {width: SCREEN_WIDTH / 2 - 32}]}
      onPress={() => navigate(RouteName.DETAIL_PRODUCT, {id: item?.id})}>
      <Image
        source={{uri: item?.image || ''}}
        style={[styles.productImage, allList && {height: 134}]}
      />
      <TouchableOpacity
        style={styles.heartContainer}
        onPress={() => {
          dispatch(addToFavourite({id: item.id}));
        }}>
        <Text style={styles.heartIcon}>
          {currentProduct?.isFav ? '🤍' : '♡'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.productName} numberOfLines={1}>
        {item?.title || 'Unnamed'}
      </Text>
      <View style={styles.priceContainer}>
        <Text
          style={[
            styles.productPrice,
            {
              color: '#6A4EFF',
              fontSize: fontPixel(ConstNumber.VALUE_14),
              marginTop: heightPixel(ConstNumber.VALUE_4),
            },
          ]}>
          ${item?.price || 'N/A'}
        </Text>
        {allList && (
          <TouchableOpacity style={styles.addIconWrapper}>
            <Text
              style={[
                styles.productPrice,
                {
                  color: '#fff',
                  fontSize: fontPixel(ConstNumber.VALUE_18),
                },
              ]}>
              +
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ProductListItem);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: widthPixel(ConstNumber.VALUE_16),
    paddingBottom: 8,
    marginRight: widthPixel(ConstNumber.VALUE_12),
    width: widthPixel(ConstNumber.VALUE_140),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: ConstNumber.VALUE_4,
    elevation: ConstNumber.VALUE_3,
  },
  productImage: {
    height: heightPixel(ConstNumber.VALUE_99),
    borderRadius: widthPixel(ConstNumber.VALUE_10),
    resizeMode: 'contain',
  },
  heartIcon: {
    fontSize: fontPixel(ConstNumber.VALUE_18),
  },

  productName: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    fontWeight: 'bold',
    marginTop: heightPixel(ConstNumber.VALUE_6),
  },
  productPrice: {
    fontWeight: '600',
  },
  addIconWrapper: {
    height: widthPixel(ConstNumber.VALUE_24),
    width: widthPixel(ConstNumber.VALUE_24),
    borderRadius: widthPixel(ConstNumber.VALUE_15),
    backgroundColor: '#6A4EFF',
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
  },
  heartContainer: {
    position: GlobalStyleValues.ABSOLUTE,
    top: heightPixel(ConstNumber.VALUE_6),
    right: widthPixel(ConstNumber.VALUE_6),
    zIndex: ConstNumber.VALUE_1,
  },
  priceContainer: {
    flexDirection: GlobalStyleValues.ROW,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
    paddingRight: heightPixel(ConstNumber.VALUE_10),
  },
});
