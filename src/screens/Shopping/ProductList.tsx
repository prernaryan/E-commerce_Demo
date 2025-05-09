import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fontPixel,
  heightPixel,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  widthPixel,
} from '../../utils/responsive';
import {navigate} from '../../services/navigationService';
import {ConstNumber, GlobalStyleValues, RouteName} from '../../constants';
import Header from '../../components/Header';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar';
import CarouselComp from '../../components/CarouselComp';
import RowText from '../../components/RowText';
import ProductListItem from '../../components/flatlistItem/ProductListItem';
import {useGetProductsQuery} from '../../services/apiSlice';
import {setProducts} from '../../redux/slice/shoppingSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const {products, carts} = useSelector(state => state.products);
  const [searchText, setSearchText] = React.useState('');
  const {top} = useSafeAreaInsets();
  const {data: apiProducts, isLoading, error} = useGetProductsQuery();
  console.log('apiProducts', apiProducts);
  const featuredProducts = products.slice(0, 5); // First 5 products
  const popularProducts = [...products].sort(
    (a, b) => b.rating.rate - a.rating.rate,
  );
  React.useEffect(() => {
    if (apiProducts) {
      dispatch(setProducts(apiProducts));
    }
  }, [apiProducts, dispatch]);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <Header
        greetings={'Hello'}
        name={'John William'}
        cartsLength={carts.length || 0}
      />
      <SearchBar
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search here"
        search={true}
      />
      <CarouselComp />
      <RowText
        leftTitle={'Featured'}
        rightTitle={'See all'}
        onPressRightTitle={() =>
          navigate(RouteName.ALL_PRODUCTS, {data: products})
        }
      />
      <FlatList
        horizontal
        data={featuredProducts}
        keyExtractor={item => item?.id?.toString() || Math.random().toString()}
        renderItem={({item}) => {
          return <ProductListItem item={item} />;
        }}
        style={{flexGrow: 0, paddingHorizontal: 8}}
        showsHorizontalScrollIndicator={false}
      />
      <RowText
        leftTitle={'Most Popular'}
        rightTitle={'See all'}
        onPressRightTitle={() =>
          navigate(RouteName.ALL_PRODUCTS, {data: products})
        }
      />
      <FlatList
        horizontal
        data={popularProducts}
        keyExtractor={item => item?.id?.toString() || Math.random().toString()}
        renderItem={({item}) => {
          return <ProductListItem item={item} />;
        }}
        style={{flexGrow: 0, paddingHorizontal: 8}}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: ConstNumber.VALUE_1,
    padding: widthPixel(ConstNumber.VALUE_8),
    backgroundColor: '#FFFFFF',
  },
  cartCount: {
    fontSize: fontPixel(ConstNumber.VALUE_16),
    fontWeight: 'bold',
    color: 'black',
    position: GlobalStyleValues.ABSOLUTE,
    backgroundColor: 'white',
    borderRadius: widthPixel(ConstNumber.VALUE_50),
    width: widthPixel(ConstNumber.VALUE_20),
    height: widthPixel(ConstNumber.VALUE_20),
    textAlign: GlobalStyleValues.CENTER,
  },
  cartButton: {
    alignItems: GlobalStyleValues.FLEX_END,
    marginBottom: heightPixel(ConstNumber.VALUE_20),
    padding: widthPixel(ConstNumber.VALUE_10),
    alignSelf: GlobalStyleValues.FLEX_END,
    borderRadius: widthPixel(ConstNumber.VALUE_15),
  },
  productItem: {
    backgroundColor: '#f9f9f9',
    padding: widthPixel(ConstNumber.VALUE_10),
    borderRadius: widthPixel(ConstNumber.VALUE_8),
    marginBottom: heightPixel(ConstNumber.VALUE_10),
    width: SCREEN_WIDTH / widthPixel(ConstNumber.VALUE_3),
    height: SCREEN_HEIGHT / heightPixel(ConstNumber.VALUE_3),
    marginHorizontal: widthPixel(ConstNumber.VALUE_8),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: ConstNumber.VALUE_4,
    elevation: ConstNumber.VALUE_2,
  },
  productDescription: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    color: '#555',
    marginBottom: heightPixel(ConstNumber.VALUE_8),
  },
  addToCartButton: {
    alignItems: GlobalStyleValues.FLEX_END,
    marginTop: heightPixel(ConstNumber.VALUE_10),
  },
  addToCartButtonText: {
    color: '#0d6e75',
    fontWeight: 'bold',
  },
  cartIcon: {
    width: widthPixel(ConstNumber.VALUE_40),
    height: widthPixel(ConstNumber.VALUE_40),
    resizeMode: GlobalStyleValues.CONTAIN,
  },
});
