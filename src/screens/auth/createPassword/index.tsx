import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AppBgImage from '../../../component/resuableComponent/appBgImage';
import {
  ConstNumber,
  GlobalStyleValues,
  images,
  RouteName,
  themes,
} from '../../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  heightPixel,
  SCREEN_HEIGHT,
  widthPixel,
} from '../../../utils/responsive';
import SmoothPinCodeInput from '@dreamwalk-os/react-native-smooth-pincode-input';
import {navigate} from '../../../services/navigationService';

type Props = {};

const CreatePassword = (props: Props) => {
  const {top} = useSafeAreaInsets();
  const [code, setCode] = React.useState('');

  const charcPassword = 'Prerna12';
  let color = '#E5EBFC';
  let focusedColor = '#004BFE';

  React.useEffect(() => {
    if (code?.length === 8) {
      if (code !== charcPassword) {
        color = '#EC4E4E';
        focusedColor = '#EC4E4E';
      } else {
        navigate(RouteName.LOGIN);
      }
    } else {
      color = '#E5EBFC';
      focusedColor = '#004BFE';
    }
  }, [code]);

  console.log('Code is: ', code);
  console.log('Codelength: ', code.length);

  return (
    <AppBgImage source={images.passwrdBg}>
      <View
        style={[
          styles.container,
          {marginTop: top + heightPixel(ConstNumber.VALUE_115)},
        ]}>
        <View
          style={{
            height: widthPixel(ConstNumber.VALUE_105),
            width: widthPixel(ConstNumber.VALUE_105),
            backgroundColor: themes.dark.white,
            borderRadius:
              widthPixel(ConstNumber.VALUE_105) / ConstNumber.VALUE_2,
            justifyContent: GlobalStyleValues.CENTER,
            alignItems: GlobalStyleValues.CENTER,
            shadowColor: themes.dark.black,
            shadowOffset: {
              width: ConstNumber.VALUE_0,
              height: heightPixel(ConstNumber.VALUE_4),
            },
            shadowOpacity: ConstNumber.VALUE_025,
            shadowRadius: ConstNumber.VALUE_4,
            elevation: ConstNumber.VALUE_4,
          }}>
          <Image
            source={images.profileImage}
            style={{height: widthPixel(91), width: widthPixel(91)}}
          />
        </View>
      </View>
    </AppBgImage>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: GlobalStyleValues.CENTER,
  },
});
