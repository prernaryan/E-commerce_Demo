import React from 'react';
import {StyleSheet, Text, View, ViewStyle, TextStyle} from 'react-native';
import {fontPixel, heightPixel, widthPixel} from '../utils/responsive';
import {ConstNumber, GlobalStyleValues} from '../constants';

interface RowTextProps {
  leftTitle: string;
  rightTitle: string;
  onPressRightTitle: () => void;
}

const RowText: React.FC<RowTextProps> = ({
  leftTitle,
  rightTitle,
  onPressRightTitle,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.left}>{leftTitle}</Text>
      <Text style={styles.right} onPress={onPressRightTitle}>
        {rightTitle}
      </Text>
    </View>
  );
};

export default React.memo(RowText);

interface Styles {
  container: ViewStyle;
  left: TextStyle;
  right: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: GlobalStyleValues.ROW,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
    marginTop: heightPixel(ConstNumber.VALUE_20),
    paddingHorizontal: widthPixel(ConstNumber.VALUE_8),
    marginBottom: heightPixel(ConstNumber.VALUE_10),
  },
  left: {
    fontSize: fontPixel(ConstNumber.VALUE_16),
    fontWeight: 'bold',
  },
  right: {
    fontSize: fontPixel(ConstNumber.VALUE_16),
    color: '#6055D8',
  },
});
