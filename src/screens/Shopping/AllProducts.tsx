import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppHeader from '../../components/AppHeader';
import {images} from '../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import ProductListItem from '../../components/flatlistItem/ProductListItem';

type Props = {};

const AllProducts = (props: Props) => {
  const {params} = useRoute<any>();

  const {data} = params ?? {data: []};

  const {top} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <AppHeader title={'Products'} leftIcon={images.BACK_ARROW} />
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item?.id?.toString() || Math.random().toString()}
        renderItem={({item}) => {
          return <ProductListItem item={item} allList={true} />;
        }}
        style={{paddingTop: 24}}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingVertical: 8,
        }}
      />
    </View>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
});
