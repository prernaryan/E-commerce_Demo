import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  ConstNumber,
  GlobalStyleValues,
  images,
  RouteName,
  texts,
  themes,
} from '../../constants';
import fonts from '../../constants/fonts';
import {
  fontPixel,
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../../utils/responsive';
import {AppText} from '../../component/resuableComponent/appText';
import AppButton from '../../component/resuableComponent/appButton';
import HorizontalWithIcon from '../../component/resuableComponent/horizontalWithIcon';
import {navigate} from '../../services/navigationService';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useTranslation} from 'react-i18next';
const BagContainer = () => {
  return (
    <View style={styles.bagStyle}>
      <Image source={images.bagIcon} />
    </View>
  );
};
const LandingScreen = () => {
  const {top, bottom} = useSafeAreaInsets();
  const {t} = useTranslation();
  return (
    <View style={[styles.container, {paddingTop: top}]}>
      <View style={styles.innerContainer}>
        <BagContainer />
        <AppText style={styles.title}>{t(texts.Shoppe)}</AppText>
        <AppText style={styles.subTitle}>{t(texts.landing_subtitle)}</AppText>
      </View>
      <View
        style={[styles.btnContainer, {marginBottom: bottom + heightPixel(55)}]}>
        <AppButton
          onPress={() => navigate(RouteName.SIGNUP)}
          title={t(texts.started_button)}
          style={styles.button}
        />
        <HorizontalWithIcon
          title={t(texts.not_have_accnt)}
          style={styles.rowwithIcon}
        />
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: ConstNumber.VALUE_1,
    alignItems: GlobalStyleValues.CENTER,
    backgroundColor: themes.light.white,
  },
  innerContainer: {
    flex: ConstNumber.VALUE_1,
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
  },
  btnContainer: {
    alignItems: GlobalStyleValues.CENTER,
  },
  title: {
    textAlign: GlobalStyleValues.CENTER,
    fontSize: fontPixel(ConstNumber.VALUE_52),
    fontFamily: fonts.Raleway.Bold,
    marginTop: heightPixel(ConstNumber.VALUE_24),
    marginBottom: heightPixel(ConstNumber.VALUE_18),
  },
  subTitle: {
    textAlign: GlobalStyleValues.CENTER,
    fontSize: fontPixel(ConstNumber.VALUE_19),
    fontFamily: fonts.NunitoSans.Light,
    width: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_126),
  },
  bagStyle: {
    height: heightPixel(ConstNumber.VALUE_134),
    width: widthPixel(ConstNumber.VALUE_134),
    backgroundColor: themes.light.white,
    borderRadius: ConstNumber.VALUE_90,
    shadowColor: themes.dark.black,
    shadowOffset: {
      width: ConstNumber.VALUE_0,
      height: heightPixel(ConstNumber.VALUE_4),
    },
    shadowOpacity: 0.25,
    shadowRadius: ConstNumber.VALUE_4,
    elevation: ConstNumber.VALUE_4,
    justifyContent: GlobalStyleValues.CENTER,
    alignItems: GlobalStyleValues.CENTER,
  },
  button: {
    borderRadius: ConstNumber.VALUE_16,
    width: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_40),
    paddingVertical: heightPixel(ConstNumber.VALUE_20),
  },
  rowwithIcon: {marginTop: heightPixel(ConstNumber.VALUE_20)},
});
