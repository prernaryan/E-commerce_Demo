import React from 'react';

import {
  ConstNumber,
  GlobalStyleValues,
  PercentageConstants,
  StyleBase,
  themes,
} from '../../constants';
import {heightPixel, widthPixel} from '../../utils/responsive';
import {StyleSheet} from 'react-native';
import RBSheet, {RBSheetRef} from './rnBottomSheet';
import {emptyFunction} from '../../utils/helperFunction';
type BottomSheetCompType = {
  snapPoints: number;
  draggableVisible?: boolean;
  onBackClick?: () => void;
};

const styles = StyleSheet.create({
  handleStyle: {
    borderTopRightRadius: ConstNumber.VALUE_26,
    backgroundColor: themes.dark.white,
    borderTopLeftRadius: ConstNumber.VALUE_26,
  },
  bottomSheetView: {
    ...StyleBase.flex1,
    width: PercentageConstants.PERCENT_100,
    paddingHorizontal: widthPixel(ConstNumber.VALUE_24),
    backgroundColor: themes.dark.white,
    paddingTop: heightPixel(ConstNumber.VALUE_16),
  },
});

const BottomSheetComp = React.forwardRef(
  (
    props: React.PropsWithChildren<BottomSheetCompType>,
    ref: React.ForwardedRef<RBSheetRef>,
  ) => {
    const {children, snapPoints, draggableVisible, onBackClick} = props;
    return (
      <RBSheet
        ref={ref}
        height={snapPoints}
        onBackClick={onBackClick ?? emptyFunction}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(24, 26, 32, 0.2)',
          },
          draggableIcon: [
            {
              backgroundColor: draggableVisible
                ? themes.dark.black
                : GlobalStyleValues.TransParent,
            },
            !draggableVisible && {
              height: ConstNumber.VALUE_0,
              margin: ConstNumber.VALUE_0,
            },
          ],
          container: styles.handleStyle,
        }}
        draggable
        closeOnPressBack
        closeOnPressMask
        customModalProps={{
          animationType: 'fade',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: true,
        }}>
        {children}
      </RBSheet>
    );
  },
);

export default React.memo(BottomSheetComp);
