import {StyleSheet, Image, View} from 'react-native';
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
  fontPixel,
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../../../utils/responsive';
import fonts from '../../../constants/fonts';
import {AppText} from '../../../component/resuableComponent/appText';
import {MarginTopView} from '../../../component/layouts/marginView';
import {goBack, navigate} from '../../../services/navigationService';
import SmoothPinCodeInput from '@dreamwalk-os/react-native-smooth-pincode-input';
import AppPressable from '../../../component/resuableComponent/appPressable';
import AppButton from '../../../component/resuableComponent/appButton';
import {KeyboardScrollView} from '../../../component/layouts/KeyboardScrollView';
import AppModal from '../../../component/resuableComponent/appModal';
import {useTranslation} from 'react-i18next';

const OtpScreen = ({route}: {route: any}) => {
  const {top, bottom} = useSafeAreaInsets();
  const {fromSms = false} = route.params ?? {};
  const [code, setCode] = React.useState('');
  const [color, setColor] = React.useState('#E5EBFC');
  const [focusedColor, setFocusedColor] = React.useState('#004BFE');
  const charcPassword = '123';
  const [isSuccessModal, setSuccessModal] = React.useState(false);
  const [attempt, setAttempt] = React.useState(0);
  const {t} = useTranslation();
  React.useEffect(() => {
    if (attempt === 3) {
      setSuccessModal(true);
      setAttempt(0);
    }
  }, [attempt]);

  return (
    <AppBgImage source={images.forgotPassBg}>
      <KeyboardScrollView
        extraStyle={styles.container}
        contentContainerStyle={{
          justifyContent: 'space-between',
          flex: 1,
          alignItems: GlobalStyleValues.CENTER,
        }}>
        <View
          style={{
            justifyContent: 'center',
            marginTop: top + ConstNumber.VALUE_112,
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={styles.profileContainer}>
            <Image source={images.profileImage} style={styles.profileImage} />
          </View>
          <AppText style={styles.title}>Password Recovery</AppText>
          <AppText style={styles.subtitle}>
            {fromSms
              ? 'Enter 4-digits code we sent you on your phone number'
              : 'Enter 4-digits code we sent you on your Email ID'}
          </AppText>
          <AppText style={styles.numMailText}>
            {fromSms ? '+98*******00' : 'Romina*********com'}
          </AppText>
          <MarginTopView size={ConstNumber.VALUE_28} />
          <SmoothPinCodeInput
            placeholder={
              <View
                style={[styles.placeholderContainer, {backgroundColor: color}]}
              />
            }
            mask={
              <View
                style={{
                  width: 17,
                  height: 17,
                  borderRadius: 25,
                  backgroundColor: focusedColor,
                }}
              />
            }
            maskDelay={1000}
            password={true}
            codeLength={ConstNumber.VALUE_3}
            cellStyle={{width: 17, height: 17, paddingHorizontal: 17}}
            cellStyleFocused={null}
            value={code}
            onTextChange={value => {
              if (code.length !== 7) {
                setColor('#E5EBFC');
                setFocusedColor('#004BFE');
              }
              setCode(value);
            }}
            cellSpacing={6}
            autoFocus={true}
            editable={true}
            animated={true}
            animationFocused="pulse"
            onFulfill={value => {
              if (value !== charcPassword) {
                setAttempt(attempt + 1);
                setColor('#EC4E4E');
                setFocusedColor('#EC4E4E');
              } else {
                navigate(RouteName.CONFIRMPASSWORD);
              }
            }}
            keyboardType="email-address"
          />
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            marginBottom: bottom + heightPixel(117),
            alignItems: 'center',
          }}>
          <AppButton
            title={'Send Again'}
            style={{
              borderRadius: 16,
              width: SCREEN_WIDTH - 174,
              paddingVertical: 20,
              backgroundColor: '#FF5790',
            }}
            onPress={() => navigate(RouteName.CONFIRMPASSWORD)}
          />
          <AppPressable onPress={goBack}>
            <AppText
              style={{
                textAlign: 'center',
                marginTop: 24,
                fontFamily: fonts.Poppins.Light,
                fontSize: fontPixel(15),
              }}>
              Cancel
            </AppText>
          </AppPressable>
        </View>
      </KeyboardScrollView>
      <AppModal
        modalVisible={isSuccessModal}
        setModalVisible={setSuccessModal}
        extraStyle={{
          width: SCREEN_WIDTH - 48,
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <View
          style={{
            height: 80,
            width: 80,
            borderWidth: 15,
            borderColor: 'white',
            backgroundColor: '#FFEBEB',
            borderRadius: 40,
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 0.18,
            shadowRadius: 8,
            elevation: 4,
            position: 'absolute',
            zIndex: 99999,
            top: -33,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#F1AEAE',
              borderWidth: 2,
              height: 22,
              width: 22,
              borderColor: 'white',
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={images.Exclamation} />
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            width: SCREEN_WIDTH - 48,
            borderRadius: 19,
            paddingTop: 57,
          }}>
          <AppText
            style={{
              width: 230,
              textAlign: 'center',
              marginTop: 15,
              fontSize: 18,
            }}>
            You reached out maximum amount of attempts. Please, try later
          </AppText>
          <AppButton
            title="Okay"
            style={{
              backgroundColor: '#202020',
              marginTop: 25,
              width: SCREEN_WIDTH - 174,
              borderRadius: 16,
              marginBottom: 20,
            }}
            textStyle={{
              color: themes.dark.white,
              paddingVertical: 10,
              textAlign: 'center',
            }}
            onPress={() => setSuccessModal(false)}
          />
        </View>
      </AppModal>
    </AppBgImage>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: ConstNumber.VALUE_1,
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
  numMailText: {
    fontFamily: fonts.Raleway.Bold,
    fontSize: fontPixel(ConstNumber.VALUE_16),
    marginTop: heightPixel(ConstNumber.VALUE_13),
    textAlign: GlobalStyleValues.CENTER,
  },
  placeholderContainer: {
    width: 17,
    height: 17,
    borderRadius: 25,
    opacity: 0.3,
  },
});
