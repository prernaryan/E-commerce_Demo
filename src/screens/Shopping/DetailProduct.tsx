import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {SCREEN_HEIGHT, SCREEN_WIDTH, widthPixel} from '../../utils/responsive';
import {goBack} from '../../services/navigationService';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../redux/slice/shoppingSlice';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppHeader from '../../components/AppHeader';
import {ConstNumber, GlobalStyleValues, images} from '../../constants';
import {useGetProductByIdQuery} from '../../services/apiSlice';

const DetailProduct = () => {
  const {top} = useSafeAreaInsets();
  const {params} = useRoute();
  const {id} = params ?? {};
  // const products = useSelector(state => state.products.products);
  // const currentProduct = products.find(p => p.id === item?.id);
  //cart functionality
  const {carts} = useSelector(state => state.products);
  const findExisitingProduct = carts.find(c => c.id === item.id);
  let count = findExisitingProduct?.quantity || 0;
  const dispatch = useDispatch();
  const {data: item, isLoading} = useGetProductByIdQuery(id);
  const isFavorite = item?.isFav || false;
  if (!item && !isLoading) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Product details not available.</Text>
        <Button title="Back" onPress={goBack} />
      </View>
    );
  }
  const handleAddCount = () => {
    if (item.totalQuantities > count) {
      dispatch(addToCart({...item, quantity: count + 1}));
    }
  };

  const handleSubtractCount = () => {
    dispatch(addToCart({...item, quantity: count - 1}));
  };
  const handleAddToCart = () => {
    dispatch(addToCart({...item, quantity: count + 1}));
  };

  return (
    <>
      <ScrollView
        style={[styles.container, {paddingTop: top}]}
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{uri: item?.image || ''}}
          style={styles.productImage}
          resizeMode="contain">
          <AppHeader rightIcon={isFavorite ? images.GREY_HEART : undefined} />
        </ImageBackground>
        <Text style={styles.productTitle}>
          {item?.title || 'Unnamed Product'}
        </Text>
        <View style={styles.priceRatingContainer}>
          <View style={styles.ratingWrapper}>
            <Image source={images.STAR} style={styles.starIcon} />
            <Text style={styles.ratingText}>{item?.rating?.rate || 'N/A'}</Text>
            <Text style={[styles.ratingText, {color: '#7D7A7A'}]}>
              {` ( ${item?.rating?.count} Review )` || 'N/A'}
            </Text>
          </View>
          <Text style={styles.productPrice}>
            {item?.price ? `$${item?.price}` : 'Price not available'}
          </Text>
        </View>
        <Text style={styles.desHeading}>Description</Text>
        <Text style={styles.productDescription}>
          {item?.description || 'No description available.'}
        </Text>
        <Text style={styles.detailsHeading}>Stock</Text>
        <Text>{`Total Quantities: ${item?.rating?.count}`}</Text>
      </ScrollView>
      <View
        style={[
          {
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'white',
            width: SCREEN_WIDTH,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingVertical: 20,
          },
          findExisitingProduct && {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
          },
        ]}>
        {findExisitingProduct && (
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={handleAddCount}>
              <Text style={styles.quantityPlusButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.quantityInitialButton}>{count}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubtractCount}>
              <Text style={styles.quantityMinusButton}>-</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.addToCartButtonContainer}>
          <TouchableOpacity
            style={[
              styles.addToCartButton,
              findExisitingProduct && {backgroundColor: 'grey'},
            ]}
            onPress={handleAddToCart}
            disabled={findExisitingProduct}>
            <Text style={styles.addToCartButtonText}>
              {findExisitingProduct ? 'Added' : 'Buy Now'}
            </Text>
          </TouchableOpacity>
          <View style={styles.bellIconWrapper}>
            <Image source={images.BAG} />
          </View>
        </View>
      </View>
    </>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginBottom: 90,
  },
  productImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2,
    borderRadius: 8,
    marginBottom: 16,
    alignSelf: 'center',
    paddingHorizontal: 16,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 8,
  },
  priceRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    marginRight: 8,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6055D8',
  },
  desHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,
  },
  detailsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDescription: {
    textAlign: 'left',
    fontSize: 12,
    color: '#9B9999',
    marginBottom: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 15,
  },
  quantityPlusButton: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginRight: 30,
  },
  quantityInitialButton: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  quantityMinusButton: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  addToCartButtonContainer: {
    flexDirection: 'row',
    alignItems: GlobalStyleValues.CENTER,
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: '#6055D8',
    marginHorizontal: 16,
    height: 48,
    width: SCREEN_WIDTH - 142,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  bellIconWrapper: {
    width: widthPixel(ConstNumber.VALUE_90),
    height: widthPixel(ConstNumber.VALUE_48),
    borderRadius: widthPixel(ConstNumber.VALUE_24),
    backgroundColor: '#F8F7F7',
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
