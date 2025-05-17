import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {images} from '../../constants';

type Props = {};

const CameraModal = ({modalVisible, setModalVisible}: any) => {
  const closeModal = () => setModalVisible(false);
  const handleGalleryPress = () => {
    console.log('Gallery pressed');
    closeModal();
  };

  const handleCameraPress = () => {
    console.log('Camera pressed');
    closeModal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={closeModal}
            style={{position: 'absolute', marginTop: 10, right: 10}}>
            <Image
              source={images.CROSS_ICON}
              style={{
                height: 20,
                width: 20,
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.modalText}>Choose Image from</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={handleGalleryPress}>
              <Image source={images.GALLERY_ICON} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCameraPress}>
              <Image source={images.GALLERY_CAMERA} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CameraModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
  closeText: {
    color: 'black',
    fontWeight: '600',
  },
});
