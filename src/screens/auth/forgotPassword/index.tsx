import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  ViewStyle,
  TextStyle,
  ImageStyle,
  Alert,
} from 'react-native';
import AppBgImage from '../../../component/resuableComponent/appBgImage';
import {
  ConstNumber,
  GlobalStyleValues,
  images,
  RouteName,
  texts,
  themes,
} from '../../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  fontPixel,
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../../../utils/responsive';
import {AppText} from '../../../component/resuableComponent/appText';
import fonts from '../../../constants/fonts';
import AppButton from '../../../component/resuableComponent/appButton';
import AppPressable from '../../../component/resuableComponent/appPressable';
import {goBack, navigate} from '../../../services/navigationService';
import {useTranslation} from 'react-i18next';

type Props = {};

type Styles = {
  container: ViewStyle;
  profileContainer: ViewStyle;
  profileImage: ImageStyle;
  title: TextStyle;
  subtitle: TextStyle;
  button: ViewStyle;
  smsButton: ViewStyle;
  emailButton: ViewStyle;
  buttonText: TextStyle;
  iconContainer: ViewStyle;
  icon: ImageStyle;
};

const ForgotPassword: React.FC<Props> = () => {
  const {top, bottom} = useSafeAreaInsets();
  const {t} = useTranslation();
  const [select, setSelect] = React.useState<string | null>(null);

  const toggleSelection = (type: 'sms' | 'email') => {
    setSelect(type);
  };

  const renderRightIcon = (isSelected: boolean, bgColor: string) => (
    <View
      style={[
        styles.iconContainer,
        {
          marginRight: widthPixel(ConstNumber.VALUE_10),
          backgroundColor: bgColor,
        },
      ]}>
      {isSelected && <Image source={images.whiteTick} style={styles.icon} />}
    </View>
  );
  return (
    <AppBgImage source={images.forgotPassBg}>
      <View
        style={[styles.container, {marginTop: top + ConstNumber.VALUE_112}]}>
        <View style={styles.profileContainer}>
          <Image source={images.profileImage} style={styles.profileImage} />
        </View>
        <AppText style={styles.title}>{t(texts.PASSWORD_RECOVERY)}</AppText>
        <AppText style={styles.subtitle}>{t(texts.RESTORE_PASSWORD)}</AppText>
        <AppButton
          style={[styles.button, styles.smsButton]}
          onPress={() => toggleSelection('sms')}
          rightIcon={renderRightIcon(select === 'sms', '#004CFF')}
          textStyle={[styles.buttonText, {color: '#004CFF'}]}
          title={t(texts.SMS)}
          leftIcon={<View style={styles.leftIconcontainer} />}
        />
        <AppButton
          style={[styles.button, styles.emailButton]}
          onPress={() => toggleSelection('email')}
          rightIcon={renderRightIcon(select === 'email', '#F8CECE')}
          textStyle={[styles.buttonText, {color: '#f09292'}]}
          title={t(texts.email)}
          leftIcon={<View style={styles.leftIconcontainer} />}
        />
      </View>
      <View
        style={{
          marginBottom: bottom + heightPixel(117),
          alignItems: GlobalStyleValues.CENTER,
        }}>
        <AppButton
          title={t(texts.done)}
          style={styles.doneBtn}
          onPress={() => {
            if (select == null) {
              Alert.alert(t(texts.ALERT_TEXT));
            } else {
              navigate(RouteName.OTPSCREEN, {
                fromSms: select === 'sms',
              });
            }
          }}
        />
        <AppPressable onPress={goBack}>
          <AppText style={styles.cancelBtn}>{t(texts.cancel)}</AppText>
        </AppPressable>
      </View>
    </AppBgImage>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create<Styles>({
  container: {
    flex: ConstNumber.VALUE_1,
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
    shadowOffset: {
      width: ConstNumber.VALUE_0,
      height: heightPixel(ConstNumber.VALUE_4),
    },
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
  button: {
    width: SCREEN_WIDTH - widthPixel(176),
    paddingVertical: heightPixel(ConstNumber.VALUE_11),
    borderRadius: widthPixel(ConstNumber.VALUE_18),
    marginBottom: heightPixel(ConstNumber.VALUE_10),
    alignSelf: GlobalStyleValues.CENTER,
  },
  smsButton: {
    backgroundColor: '#E5EBFC',
    marginTop: heightPixel(ConstNumber.VALUE_28),
  },
  emailButton: {
    backgroundColor: '#FFEBEB',
  },
  buttonText: {
    marginRight: widthPixel(ConstNumber.VALUE_10),
    fontSize: fontPixel(15),
    fontFamily: fonts.Raleway.Bold,
    textAlign: GlobalStyleValues.CENTER,
  },
  iconContainer: {
    height: widthPixel(ConstNumber.VALUE_22),
    width: widthPixel(ConstNumber.VALUE_22),
    borderWidth: widthPixel(ConstNumber.VALUE_2),
    borderColor: 'white',
    borderRadius: widthPixel(ConstNumber.VALUE_20),
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.CENTER,
  },
  icon: {
    height: widthPixel(ConstNumber.VALUE_7),
    width: widthPixel(ConstNumber.VALUE_5),
  },
  leftIconcontainer: {height: 20, width: 22, marginLeft: 10},
  doneBtn: {
    borderRadius: ConstNumber.VALUE_16,
    width: SCREEN_WIDTH - ConstNumber.VALUE_40,
    paddingVertical: ConstNumber.VALUE_20,
  },
  cancelBtn: {
    textAlign: GlobalStyleValues.CENTER,
    marginTop: ConstNumber.VALUE_24,
    fontFamily: fonts.Poppins.Light,
    fontSize: fontPixel(ConstNumber.VALUE_15),
  },
});
