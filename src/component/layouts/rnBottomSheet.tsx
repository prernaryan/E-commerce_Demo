import React from 'react';
import {
  Animated,
  PanResponder,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
  Platform,
  View,
  KeyboardAvoidingViewProps,
  ModalProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styles from './style';
import {emptyFunction} from '../../utils/helperFunction';
import {heightPixel} from '../../utils/responsive';
import {ConstNumber} from '../../constants';

export interface RBSheetProps {
  height?: number;
  openDuration?: number;
  closeDuration?: number;
  closeOnPressMask?: boolean;
  closeOnPressBack?: boolean;
  draggable?: boolean;
  dragOnContent?: boolean;
  useNativeDriver?: boolean;
  customStyles?: {
    wrapper?: StyleProp<ViewStyle>;
    container?: StyleProp<ViewStyle>;
    draggableIcon?: StyleProp<ViewStyle>;
  };
  customModalProps?: ModalProps;
  customAvoidingViewProps?: KeyboardAvoidingViewProps;
  onOpen?: () => void;
  onClose?: () => void;
  children?: React.ReactNode;
  onBackClick?: () => void;
}

export interface RBSheetRef {
  open: () => void;
  close: () => void;
}

const RBSheet = React.forwardRef<RBSheetRef, RBSheetProps>((props, ref) => {
  const {
    height = heightPixel(ConstNumber.VALUE_260),
    openDuration = ConstNumber.VALUE_300,
    closeDuration = ConstNumber.VALUE_200,
    closeOnPressMask = true,
    closeOnPressBack = false,
    draggable = false,
    dragOnContent = false,
    useNativeDriver = false,
    customStyles = {},
    customModalProps = {},
    customAvoidingViewProps = {},
    onOpen = () => {},
    onClose = () => {},
    children = <View />,
    onBackClick = () => {},
  } = props;

  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const animatedHeight = React.useRef(new Animated.Value(0)).current;
  const pan = React.useRef(new Animated.ValueXY()).current;

  React.useImperativeHandle(
    ref,
    (): RBSheetRef => ({
      open: () => handleSetVisible(true),
      close: () => handleSetVisible(false),
    }),
  );

  const createPanResponder = () => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => draggable,
      onMoveShouldSetPanResponder: (e, gestureState) =>
        draggable && dragOnContent && gestureState.dy > ConstNumber.VALUE_0,
      onPanResponderMove: (e, gestureState) => {
        gestureState.dy > ConstNumber.VALUE_0 &&
          Animated.event([null, {dy: pan.y}], {useNativeDriver})(
            e,
            gestureState,
          );
      },
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy > ConstNumber.VALUE_100) {
          handleSetVisible(false);
        } else {
          Animated.spring(pan, {
            toValue: {x: ConstNumber.VALUE_0, y: ConstNumber.VALUE_0},
            useNativeDriver,
          }).start();
        }
      },
    });
  };

  const panResponder = React.useRef(createPanResponder()).current;

  const handleSetVisible = (visible: boolean) => {
    setModalVisible(visible);
    if (visible) {
      onOpen();
      Animated.timing(animatedHeight, {
        useNativeDriver,
        toValue: height,
        duration: openDuration,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        useNativeDriver,
        toValue: ConstNumber.VALUE_0,
        duration: closeDuration,
      }).start(() => {
        setModalVisible(visible);
        pan.setValue({x: ConstNumber.VALUE_0, y: ConstNumber.VALUE_0});
        onClose();
      });
    }
  };
  const handleBackClick = React.useCallback(() => {
    handleSetVisible(false);
    onBackClick();
  }, []);
  return (
    <Modal
      testID="Modal"
      transparent
      visible={modalVisible}
      animationType="slide"
      onRequestClose={closeOnPressBack ? handleBackClick : emptyFunction}
      {...customModalProps}>
      <KeyboardAvoidingView
        testID="KeyboardAvoidingView"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.wrapper, customStyles.wrapper]}
        {...customAvoidingViewProps}>
        <TouchableOpacity
          testID="TouchableOpacity"
          style={styles.mask}
          activeOpacity={1}
          onPress={closeOnPressMask ? handleBackClick : emptyFunction}
        />
        <Animated.View
          testID="AnimatedView"
          {...(dragOnContent && panResponder.panHandlers)}
          style={[
            styles.container,
            {transform: pan.getTranslateTransform()},
            {height: animatedHeight},
            customStyles.container,
          ]}>
          {draggable && (
            <View
              testID="DraggableView"
              {...(!dragOnContent && panResponder.panHandlers)}
              style={styles.draggableContainer}>
              <View
                testID="DraggableIcon"
                style={[styles.draggableIcon, customStyles.draggableIcon]}
              />
            </View>
          )}
          {children}
        </Animated.View>
      </KeyboardAvoidingView>
    </Modal>
  );
});

export default RBSheet;
