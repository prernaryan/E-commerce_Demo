import {View} from 'react-native';
import React from 'react';
import AppBgImage from '../../../component/resuableComponent/appBgImage';
import {images, RouteName, texts} from '../../../constants';
import {AppText} from '../../../component/resuableComponent/appText';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import fonts from '../../../constants/fonts';
import HorizontalWithIcon from '../../../component/resuableComponent/horizontalWithIcon';
import CustomInput from '../../../component/resuableComponent/customInput';
import AppButton from '../../../component/resuableComponent/appButton';
import {fontPixel, SCREEN_WIDTH} from '../../../utils/responsive';
import AppPressable from '../../../component/resuableComponent/appPressable';
import {navigate} from '../../../services/navigationService';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

const Login = () => {
  const {top, bottom} = useSafeAreaInsets();
  const {t} = useTranslation();
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
          <AppText style={styles.title}>{t(texts.LOGIN_HEADING)} </AppText>
          <HorizontalWithIcon
            title={t(texts.GOOD_TO_SEE)}
            source={images.heart}
          />
          <CustomInput
            placeholder={t(texts.email)}
            value={''}
            onChange={() => {}}
            containerStyle={styles.inputBox}
          />
        </View>
        <View style={{marginTop: 40, bottom: bottom + 53}}>
          <AppButton
            title={t(texts.done)}
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
              {t(texts.cancel)}
            </AppText>
          </AppPressable>
        </View>
      </View>
    </AppBgImage>
  );
};

export default Login;
