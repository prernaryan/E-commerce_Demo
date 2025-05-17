import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {images} from '../../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {goBack} from '../../../services/navigationService';
import ImagePicker from 'react-native-image-crop-picker';
import {useImageContext} from '../../../contextApi/imageContext';

type Props = {};

const ModalScreen = (props: Props) => {
  const {setShowImages} = useImageContext();
  const {top} = useSafeAreaInsets();

  const handleGalleryPress = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then(selectedImages => {
      setShowImages(selectedImages);
    });
    console.log('Gallery pressed');
    goBack();
  };

  const handleCameraPress = () => {
    console.log('Camera pressed');
  };
  return (
    <View style={{flex: 1, marginTop: top}}>
      <TouchableOpacity onPress={goBack}>
        <Image source={images.BACK_ARROW} style={{marginLeft: 20}} />
      </TouchableOpacity>
      <View style={{flex: 1, backgroundColor: 'white', marginTop: 40}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 80,
            paddingVertical: 80,
          }}>
          <TouchableOpacity onPress={handleGalleryPress}>
            <Image source={images.GALLERY_ICON} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCameraPress}>
            <Image source={images.GALLERY_CAMERA} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({});
