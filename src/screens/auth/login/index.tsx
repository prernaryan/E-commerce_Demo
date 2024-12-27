import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppBgImage from '../../../component/resuableComponent/appBgImage';
import {images, RouteName} from '../../../constants';
import {AppText} from '../../../component/resuableComponent/appText';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import fonts from '../../../constants/fonts';
import HorizontalWithIcon from '../../../component/resuableComponent/horizontalWithIcon';
import CustomInput from '../../../component/resuableComponent/customInput';
import AppButton from '../../../component/resuableComponent/appButton';
import {fontPixel, SCREEN_WIDTH} from '../../../utils/responsive';
import AppPressable from '../../../component/resuableComponent/appPressable';
import {navigate} from '../../../services/navigationService';

const Login = () => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <AppBgImage source={images.loginBg}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: 'space-between',
          marginTop: top + 394,
        }}>
        <View>
          <AppText style={styles.title}>Login</AppText>
          <HorizontalWithIcon
            title="Good to see you back!"
            source={images.heart}
          />
          <CustomInput
            placeholder="Email"
            value={''}
            onChange={() => {}}
            containerStyle={styles.inputBox}
          />
        </View>
        <View style={{marginTop: 40, bottom: bottom + 53}}>
          <AppButton
            title={'Done'}
            style={{
              borderRadius: 16,
              width: SCREEN_WIDTH - 40,
              paddingVertical: 20,
            }}
            onPress={() => navigate(RouteName.CREATEPASSWORD)}
          />
          <AppPressable>
            <AppText
              style={{
                textAlign: 'center',
                marginTop: 40,
                fontFamily: fonts.Poppins.Light,
                fontSize: fontPixel(15),
              }}>
              Cancel
            </AppText>
          </AppPressable>
        </View>
      </View>
    </AppBgImage>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 52,
    fontFamily: fonts.Raleway.Bold,
    color: 'black',
    marginBottom: 4,
  },
  inputBox: {
    marginTop: 17,
  },
});
