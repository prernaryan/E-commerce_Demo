import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppBgImage from '../../../component/resuableComponent/appBgImage';
import CustomInput from '../../../component/resuableComponent/customInput';
import AppButton from '../../../component/resuableComponent/appButton';
import AppPressable from '../../../component/resuableComponent/appPressable';
import {AppText} from '../../../component/resuableComponent/appText';
import {goBack, navigate} from '../../../services/navigationService';
import {
  ConstNumber,
  GlobalStyleValues,
  images,
  RouteName,
  texts,
  themes,
} from '../../../constants';
import {
  fontPixel,
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../../../utils/responsive';
import fonts from '../../../constants/fonts';
import {useTranslation} from 'react-i18next';

const ConfirmPassword = () => {
  const {top, bottom} = useSafeAreaInsets();
  const {t} = useTranslation();

  return (
    <AppBgImage source={images.forgotPassBg}>
      <View
        style={[styles.container, {paddingTop: top + ConstNumber.VALUE_112}]}>
        <View style={styles.content}>
          <View style={styles.centerAlign}>
            <View style={styles.profileContainer}>
              <Image source={images.profileImage} style={styles.profileImage} />
            </View>
            <AppText style={styles.title}>Setup New Password</AppText>
            <AppText style={styles.subtitle}>
              Please, setup a new password for your account
            </AppText>
          </View>
          <CustomInput
            placeholder="New Password"
            value=""
            onChange={() => {}}
            containerStyle={styles.inputBox}
            inputStyle={styles.placeholderCenter}
          />
          <CustomInput
            placeholder="Repeat Password"
            value=""
            onChange={() => {}}
            containerStyle={styles.inputMargin}
            inputStyle={styles.placeholderCenter}
          />
        </View>
        <View
          style={[
            styles.footer,
            {paddingBottom: bottom + ConstNumber.VALUE_53},
          ]}>
          <AppButton
            title="Done"
            style={styles.doneButton}
            onPress={() => {
              navigate(RouteName.BOTTOM_TAB_NAVIGATOR);
            }}
          />
          <AppPressable onPress={goBack}>
            <AppText style={styles.cancelText}>{t(texts.cancel)}</AppText>
          </AppPressable>
        </View>
      </View>
    </AppBgImage>
  );
};

export default ConfirmPassword;

const styles = StyleSheet.create({
  container: {
    flex: ConstNumber.VALUE_1,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
    paddingHorizontal: ConstNumber.VALUE_20,
  },
  content: {
    justifyContent: GlobalStyleValues.CENTER,
  },
  centerAlign: {
    alignItems: GlobalStyleValues.CENTER,
  },
  profileContainer: {
    height: widthPixel(ConstNumber.VALUE_105),
    width: widthPixel(ConstNumber.VALUE_105),
    backgroundColor: themes.dark.white,
    borderRadius: widthPixel(ConstNumber.VALUE_105) / ConstNumber.VALUE_2,
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
    shadowColor: themes.dark.black,
    shadowOffset: {width: 0, height: heightPixel(ConstNumber.VALUE_4)},
    shadowOpacity: ConstNumber.VALUE_025,
    shadowRadius: ConstNumber.VALUE_4,
    elevation: ConstNumber.VALUE_4,
  },
  profileImage: {
    height: widthPixel(ConstNumber.VALUE_91),
    width: widthPixel(ConstNumber.VALUE_91),
  },
  title: {
    fontFamily: fonts.Raleway.Bold,
    fontSize: fontPixel(ConstNumber.VALUE_21),
    marginTop: heightPixel(ConstNumber.VALUE_19),
  },
  subtitle: {
    textAlign: GlobalStyleValues.CENTER,
    fontFamily: fonts.Poppins.Light,
    fontSize: fontPixel(ConstNumber.VALUE_19),
    width: widthPixel(290),
    marginTop: heightPixel(ConstNumber.VALUE_5),
  },
  inputBox: {
    marginTop: heightPixel(ConstNumber.VALUE_23),
  },
  inputMargin: {
    marginTop: ConstNumber.VALUE_10,
  },
  footer: {
    alignItems: GlobalStyleValues.CENTER,
  },
  doneButton: {
    borderRadius: ConstNumber.VALUE_16,
    width: SCREEN_WIDTH - ConstNumber.VALUE_40,
    paddingVertical: ConstNumber.VALUE_20,
    alignItems: GlobalStyleValues.CENTER,
  },
  cancelText: {
    textAlign: GlobalStyleValues.CENTER,
    marginTop: ConstNumber.VALUE_40,
    fontFamily: fonts.Poppins.Light,
    fontSize: fontPixel(ConstNumber.VALUE_15),
  },
  placeholderCenter: {
    textAlign: 'center',
  },
});
