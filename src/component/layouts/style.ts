import {StyleSheet} from 'react-native';
import {
  ConstNumber,
  GlobalStyleValues,
  PercentageConstants,
  themes,
} from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    flex: ConstNumber.VALUE_1,
    backgroundColor: themes.dark.wrapper,
  },
  mask: {
    flex: ConstNumber.VALUE_1,
    backgroundColor: GlobalStyleValues.TransParent,
  },
  container: {
    backgroundColor: themes.dark.white,
    width: PercentageConstants.PERCENT_100,
    height: ConstNumber.VALUE_0,
    overflow: GlobalStyleValues.HIDDEN,
  },
  draggableContainer: {
    width: PercentageConstants.PERCENT_100,
    alignItems: GlobalStyleValues.CENTER,
    backgroundColor: GlobalStyleValues.TransParent,
  },
  draggableIcon: {
    width: ConstNumber.VALUE_35,
    height: ConstNumber.VALUE_5,
    borderRadius: ConstNumber.VALUE_5,
    margin: ConstNumber.VALUE_10,
    backgroundColor: themes.dark.white,
  },
});

export default styles;
