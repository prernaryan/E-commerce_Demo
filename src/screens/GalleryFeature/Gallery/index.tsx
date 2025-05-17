import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {images, RouteName} from '../../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigate} from '../../../services/navigationService';
import {useImageContext} from '../../../contextApi/imageContext';

type Props = {};

const Gallery = (props: Props) => {
  const {top} = useSafeAreaInsets();
  const {showImages} = useImageContext();
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: top}}>
      <TouchableOpacity onPress={() => navigate(RouteName.MODAL_SCREEN)}>
        <Image
          source={images.CAMERA}
          resizeMode="contain"
          style={{height: 50, width: 50}}
        />
      </TouchableOpacity>
      {/* <View style={{marginTop: 20}}> */}
      {showImages.map((img, index) => (
        <Image
          key={index}
          source={{uri: img.path}}
          style={{width: 100, height: 100, margin: 5}}
          resizeMode="cover"
        />
      ))}
      {/* </View> */}
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({});
