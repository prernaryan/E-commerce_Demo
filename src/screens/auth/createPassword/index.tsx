import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import AppBgImage from '../../../component/resuableComponent/appBgImage';
import {
  ConstNumber,
  images,
  RouteName,
  StyleBase,
  texts,
  themes,
} from '../../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {fontPixel, heightPixel, widthPixel} from '../../../utils/responsive';
import SmoothPinCodeInput from '@dreamwalk-os/react-native-smooth-pincode-input';
import {MarginTopView} from '../../../component/layouts/marginView';
import {navigate} from '../../../services/navigationService';
import {KeyboardScrollView} from '../../../component/layouts/KeyboardScrollView';
import {AppText} from '../../../component/resuableComponent/appText';
import HorizontalWithIcon from '../../../component/resuableComponent/horizontalWithIcon';
import fonts from '../../../constants/fonts';
import AppPressable from '../../../component/resuableComponent/appPressable';
import {useTranslation} from 'react-i18next';

const CreatePassword = () => {
  const {top, bottom} = useSafeAreaInsets();
  const {t} = useTranslation();
  const [code, setCode] = React.useState('');
  const [color, setColor] = React.useState('#B8C7F0');
  const [focusedColor, setFocusedColor] = React.useState('#004BFE');
  const charcPassword = '123';

  return (
    <AppBgImage source={images.passwrdBg}>
      <KeyboardScrollView
        contentContainerStyle={[
          StyleBase.flex1,
          StyleBase.spaceBetween,
          StyleBase.alignCenter,
        ]}>
        <View
          style={{
            ...StyleBase.alignCenter,
            marginTop: top + ConstNumber.VALUE_115,
          }}>
          <View
            style={{
              ...StyleBase.inCenter,
              height: widthPixel(ConstNumber.VALUE_105),
              width: widthPixel(ConstNumber.VALUE_105),
              backgroundColor: themes.dark.white,
              borderRadius:
                widthPixel(ConstNumber.VALUE_105) / ConstNumber.VALUE_2,
              shadowColor: themes.dark.black,
              shadowOffset: {
                width: ConstNumber.VALUE_0,
                height: heightPixel(ConstNumber.VALUE_4),
              },
              shadowOpacity: ConstNumber.VALUE_025,
              shadowRadius: ConstNumber.VALUE_4,
              elevation: ConstNumber.VALUE_4,
            }}>
            <Image source={images.profileImage} style={styles.profileImage} />
          </View>
          <MarginTopView size={ConstNumber.VALUE_35} />
          <AppText style={styles.heading}>
            {t(texts.CREATE_ACCOUNT_HEADING)}
          </AppText>
          <MarginTopView size={ConstNumber.VALUE_30} />
          <AppText style={styles.typepsswrd}>{t(texts.TYPE_PASSWORD)}</AppText>
          <MarginTopView size={ConstNumber.VALUE_27} />
          <SmoothPinCodeInput
            placeholder={
              <View style={[styles.pinCode, {backgroundColor: color}]} />
            }
            mask={
              <View
                style={[styles.innerPinCode, {backgroundColor: focusedColor}]}
              />
            }
            maskDelay={1000}
            password={true}
            codeLength={ConstNumber.VALUE_3}
            cellStyle={styles.cellStyle}
            cellStyleFocused={null}
            value={code}
            onTextChange={value => {
              if (code.length !== ConstNumber.VALUE_7) {
                setColor('#E5EBFC');
                setFocusedColor('#004BFE');
              }
              setCode(value);
            }}
            cellSpacing={ConstNumber.VALUE_6}
            autoFocus={true}
            editable={true}
            animated={true}
            animationFocused="pulse"
            onFulfill={value => {
              if (value !== charcPassword) {
                setColor('#EC4E4E');
                setFocusedColor('#EC4E4E');
              } else {
                navigate(RouteName.FORGOTPASSWORD);
              }
            }}
            keyboardType="email-address"
          />
          <MarginTopView size={ConstNumber.VALUE_44} />
          <AppPressable onPress={() => navigate(RouteName.FORGOTPASSWORD)}>
            <AppText>{t(texts.FORGOT_PASSWORD)}</AppText>
          </AppPressable>
        </View>
        <HorizontalWithIcon
          title={t(texts.not_you)}
          style={{marginBottom: bottom + heightPixel(ConstNumber.VALUE_81)}}
          onPress={() => {
            navigate(RouteName.SIGNUP);
          }}
        />
      </KeyboardScrollView>
    </AppBgImage>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  typepsswrd: {
    fontSize: fontPixel(ConstNumber.VALUE_19),
    fontFamily: fonts.Raleway.Regular,
  },
  heading: {
    fontSize: fontPixel(ConstNumber.VALUE_28),
    fontFamily: fonts.Raleway.Bold,
  },
  profileImage: {
    height: widthPixel(ConstNumber.VALUE_91),
    width: widthPixel(ConstNumber.VALUE_91),
  },
  pinCode: {
    width: widthPixel(ConstNumber.VALUE_17),
    height: widthPixel(ConstNumber.VALUE_17),
    borderRadius: ConstNumber.VALUE_25,
    opacity: 0.3,
  },
  innerPinCode: {
    width: widthPixel(ConstNumber.VALUE_17),
    height: widthPixel(ConstNumber.VALUE_17),
    borderRadius: ConstNumber.VALUE_25,
  },
  cellStyle: {
    width: widthPixel(ConstNumber.VALUE_17),
    height: widthPixel(ConstNumber.VALUE_17),
    paddingHorizontal: widthPixel(ConstNumber.VALUE_17),
  },
});
