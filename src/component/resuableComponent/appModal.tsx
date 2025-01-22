import React, {ReactNode} from 'react';
import {View, Modal, StyleProp, ViewStyle, StyleSheet} from 'react-native';
import {
  ConstNumber,
  GlobalStyleValues,
  PercentageConstants,
} from '../../constants';
import {fontPixel, heightPixel, widthPixel} from '../../utils/responsive';
import fonts from '../../constants/fonts';
import AppPressable from './appPressable';

interface AppModalProps {
  setModalVisible: (visible: boolean) => void;
  modalVisible: boolean;
  children: ReactNode;
  extraStyle?: StyleProp<ViewStyle>;
}

const AppModal: React.FC<AppModalProps> = ({
  setModalVisible,
  modalVisible,
  children,
  extraStyle = {},
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <AppPressable style={styles.modalContainer}>
        <View style={[styles.modalContent, extraStyle]}>{children}</View>
      </AppPressable>
    </Modal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: ConstNumber.VALUE_1,
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
    backgroundColor: 'rgba(14, 14, 14, 0.78)',
  },
  modalContent: {
    width: PercentageConstants.PERCENT_90,
    backgroundColor: 'white',

    borderRadius: widthPixel(ConstNumber.VALUE_16),
    paddingHorizontal: widthPixel(ConstNumber.VALUE_24),
    paddingTop: heightPixel(ConstNumber.VALUE_16),
    paddingBottom: heightPixel(ConstNumber.VALUE_8),
  },
  modalCloseButton: {
    paddingVertical: heightPixel(ConstNumber.VALUE_1),
    paddingRight: widthPixel(ConstNumber.VALUE_15),
    alignSelf: GlobalStyleValues.FLEX_END,
  },
  modalCloseText: {
    fontFamily: fonts.Raleway.Bold,
    fontSize: fontPixel(ConstNumber.VALUE_14),
    color: '#004CFF',
  },
});
