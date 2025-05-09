import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {navigate} from '../../services/navigationService';
import {addToCart} from '../../redux/slice/shoppingSlice';
import {images, RouteName} from '../../constants';
import AppHeader from '../../components/AppHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const AddToCart = () => {
  const {carts} = useSelector(state => state.products);
  const [discount, setDiscount] = React.useState('');
  const [dicountedAmount, setDiscountedAmount] = React.useState(0);
  const [totalAmount, setTotalAmount] = React.useState(subtotal || 0);
  const [appliedPromoCode, setAppliedPromoCode] = React.useState(null);
  const dispatch = useDispatch();
  const {top} = useSafeAreaInsets();
  console.log('carts', carts?.length);

  React.useEffect(() => {
    if (!appliedPromoCode) {
      console.log('Coupon removed or not applied');
      setTotalAmount(subtotal);
      setDiscountedAmount(0);
      return;
    }
    console.log(appliedPromoCode, 'appliedPromoCode>>');
    const promoDiscounts = {
      FREE50: subtotal * 0.5, // 50% off
      GET20OFF: subtotal * 0.2, // 20% off
      GET100OFF: Math.min(100, subtotal), // Max $100 off
      GETFORFREE: subtotal, // Full discount
    };
    const dis = promoDiscounts[appliedPromoCode] || 0;
    setTotalAmount(subtotal - dis);
    setDiscountedAmount(dis);
  }, [appliedPromoCode, subtotal]);

  const handleAddCount = (item: any) => {
    if (item.totalQuantities > item?.quantity) {
      dispatch(addToCart({...item, quantity: item?.quantity + 1}));
    }
  };

  const handleSubtractCount = (item: any) => {
    if (item.quantity > 1) {
      dispatch(addToCart({...item, quantity: item?.quantity - 1}));
    }
  };

  const subtotal = carts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const applyPromo = (couponCode: string) => {
    const discounts = {
      FREE50: '50%',
      GET20OFF: '20%',
      GET100OFF: '100',
      GETFORFREE: 'Free',
    };
    if (!discounts[couponCode]) {
      Alert.alert('Invalid Coupon');
      return;
    }
    setAppliedPromoCode(couponCode);
    setDiscount('');
  };

  const cartRenderItem = ({item}: any) => {
    return (
      <View style={styles.cartItem}>
        <Image
          source={{uri: item?.image}}
          resizeMode="contain"
          style={styles.cartImage}
        />
        <View style={styles.itemDetails}>
          <Text style={styles.cartProductName}>{item?.title}</Text>
          <Text style={styles.cartProductBrandName}>{item?.category}</Text>
          <Text style={styles.cartProductPrice}>
            ${item?.price * item?.quantity}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.binStyle}>
            <Image source={images.BIN} style={styles.binStyle} />
          </TouchableOpacity>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => handleAddCount(item)}
              style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity
              onPress={() => handleSubtractCount(item)}
              style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <AppHeader title="Cart" rightIcon={images.MORE_ICON} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {carts.length > 0 ? (
          <FlatList
            data={carts}
            keyExtractor={item =>
              item?.id?.toString() || Math.random().toString()
            }
            renderItem={cartRenderItem}
          />
        ) : (
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        )}
      </ScrollView>
      {carts.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.footerHeading}>Order Summary</Text>
          <View style={styles.promoContainer}>
            <TextInput
              style={styles.input}
              value={discount}
              onChangeText={setDiscount}
              placeholder="Enter promo code"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => applyPromo(discount)}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
          {appliedPromoCode && (
            <TouchableOpacity
              onPress={() => setAppliedPromoCode(null)}
              style={styles.promoWithCross}>
              <Image source={images.DISCOUNT} style={styles.discountIcon} />
              <Text style={styles.appliedPromo}>{appliedPromoCode}</Text>
              <Image source={images.SMALL_CROSS} style={styles.smallCross} />
            </TouchableOpacity>
          )}
          <View style={styles.discountContainer}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Items</Text>
              <Text style={styles.priceValue}>{carts?.length}</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Subtotal</Text>
              <Text style={styles.priceValue}>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.priceRow}>
              {dicountedAmount && (
                <>
                  <Text style={styles.priceLabel}>Discount</Text>
                  <Image source={images.DISCOUNT} style={styles.discountIcon} />
                  <Text style={styles.promocodeText}>{appliedPromoCode}</Text>
                  <Text style={styles.priceValue}>
                    -${dicountedAmount?.toFixed(2)}
                  </Text>
                </>
              )}
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Total</Text>
              <Text style={styles.priceValue}>${totalAmount?.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      )}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => Alert.alert('Checkout')}>
        <Text style={styles.checkoutButtonText}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  backButtonContainer: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 6,
    backgroundColor: '#F8F7F7',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 15,
  },
  cartImage: {
    width: 126,
    height: 99,
    borderRadius: 10,
    marginRight: 6,
  },
  itemDetails: {
    flex: 1,
  },
  cartProductName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cartProductBrandName: {
    fontSize: 12,
    color: '#9B9999',
    fontWeight: '800',
    marginBottom: 8,
  },
  cartProductPrice: {
    fontSize: 12,
    fontWeight: '800',
    color: '#6055D8',
  },
  rightContainer: {marginRight: 6, paddingVertical: 6},
  binStyle: {
    alignSelf: 'flex-end',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 34,
  },
  quantityButton: {
    backgroundColor: '#6055D8',
    width: 28,
    height: 28,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: '#000',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  footer: {
    backgroundColor: '#F8F7F7',
    padding: 20,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    marginBottom: 30,
  },
  footerHeading: {
    marginBottom: 8,
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  promoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 10,
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: '#6055D8',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  checkoutButton: {
    backgroundColor: '#6055D8',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 40,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  discountContainer: {
    marginBottom: 20,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceLabel: {
    fontSize: 16,
    color: '#484848',
  },
  priceValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  discountIcon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  promocodeText: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 100,
    color: '#484848',
  },
  promoWithCross: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#dbdede',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  smallCross: {
    width: 15,
    height: 15,
  },
  appliedPromo: {
    marginLeft: 5,
    color: '#484848',
  },
});
