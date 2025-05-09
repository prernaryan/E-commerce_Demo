import React, {forwardRef} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  TextInput as RNTextInput,
  Image,
} from 'react-native';
import {ConstNumber, GlobalStyleValues, images} from '../constants';
import {
  fontPixel,
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../utils/responsive';

type SearchBarProps = {
  placeholder?: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: TextInputProps['keyboardType'];
  maxLength?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  multiline?: boolean;
  search?: boolean;
};

const SearchBar = forwardRef<RNTextInput, SearchBarProps>((props, ref) => {
  const {
    placeholder = '',
    placeholderTextColor = '#A6A6A6',
    secureTextEntry = false,
    value,
    onChangeText,
    keyboardType,
    maxLength,
    onFocus,
    onBlur,
    search = false,
    multiline = false,
  } = props;

  return (
    <View style={styles.container}>
      {search && (
        <Image
          source={images.SEARCH_ICON}
          //   style={styles.searchIcon}
          resizeMode="contain"
        />
      )}
      <TextInput
        ref={ref}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onFocus={onFocus}
        onBlur={onBlur}
        multiline={multiline}
      />
    </View>
  );
});

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: heightPixel(ConstNumber.VALUE_22),
    backgroundColor: '#F8F7F7',
    borderRadius: widthPixel(ConstNumber.VALUE_30),
    flexDirection: GlobalStyleValues.ROW,
    alignSelf: GlobalStyleValues.CENTER,
    marginBottom: heightPixel(ConstNumber.VALUE_20),
    width: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_32),
    paddingVertical: heightPixel(ConstNumber.VALUE_15),
    paddingHorizontal: widthPixel(ConstNumber.VALUE_8),
  },
  input: {
    backgroundColor: '#F8F7F7',
    fontSize: fontPixel(ConstNumber.VALUE_16),
    paddingHorizontal: widthPixel(ConstNumber.VALUE_8),
  },
});
