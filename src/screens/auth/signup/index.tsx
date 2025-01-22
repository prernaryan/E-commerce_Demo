import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import AppBgImage from '../../../component/resuableComponent/appBgImage';
import {
  ConstNumber,
  GlobalStyleValues,
  images,
  RouteName,
  StyleBase,
  texts,
  themes,
} from '../../../constants';
import {
  fontPixel,
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../../../utils/responsive';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import fonts from '../../../constants/fonts';
import {useTheme} from '../../../contextApi/appTheme';
import CustomInput from '../../../component/resuableComponent/customInput';
import AppPressable from '../../../component/resuableComponent/appPressable';
import {
  countriesArray,
  Country,
  indiaCode,
  indiaObject,
} from '../../../constants/countries';
import {
  FLAG_CDN_URL,
  KEYBOARD_TYPE,
  PNG_FORMAT,
} from '../../../constants/appConstants';
import AppButton from '../../../component/resuableComponent/appButton';
import {goBack, navigate} from '../../../services/navigationService';
import {AppText} from '../../../component/resuableComponent/appText';

import BottomSheetComp from '../../../component/layouts/bottomSheetComp';
import {RBSheetRef} from '../../../component/layouts/rnBottomSheet';
import {KeyboardScrollView} from '../../../component/layouts/KeyboardScrollView';
import {useTranslation} from 'react-i18next';

const SignUp = () => {
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();
  const {colors} = useTheme();
  const bottomSheetRef = useRef<RBSheetRef>(null);
  const [selectedCountry, setSelectedCountry] =
    React.useState<Country>(indiaObject);
  const [search, setSearch] = React.useState('');
  const [filterData, setfilterData] = React.useState(countriesArray);

  React.useEffect(() => {
    if (search) {
      const filteredData = countriesArray.filter(item => {
        const searchLower = search.toLowerCase();
        return (
          item.name.toLowerCase().includes(searchLower) ||
          item.phone.toLowerCase().includes(searchLower) ||
          item.emoji.toLowerCase().includes(searchLower) ||
          item.capital.toLowerCase().includes(searchLower)
        );
      });
      setfilterData(filteredData);
    } else {
      setfilterData(countriesArray);
    }
  }, [search]);

  const flagRenderItem = ({item}: {item: Country}) => {
    const countryCode = item?.country_Cd ? item.country_Cd : '';
    return (
      <>
        <AppPressable
          key={item?.phone}
          onPress={() => {
            bottomSheetRef.current?.close();
            setSelectedCountry(item);
          }}
          style={styles.renderContainer}>
          <Image
            source={{
              uri: FLAG_CDN_URL + countryCode.toLocaleLowerCase() + PNG_FORMAT,
            }}
            style={styles.flag}
          />
          <AppText style={styles.phoneText}>{item?.phone}</AppText>
          <AppText style={styles.renderName}>{item?.name}</AppText>
        </AppPressable>
      </>
    );
  };

  return (
    <AppBgImage source={images.signupBubble}>
      <KeyboardScrollView>
        <View style={[styles.innerContainer, {marginTop: top + 78}]}>
          <View style={styles.headingContainer}>
            <Text style={[styles.headingText, {color: colors.text}]}>
              {t(texts.CREATE_ACCOUNT)}
            </Text>
            <Image source={images.cameraIcon} />
          </View>
          <CustomInput
            placeholder={t(texts.email)}
            value={''}
            onChange={() => {}}
            containerStyle={styles.inputBox}
          />
          <CustomInput
            placeholder={t(texts.password)}
            secureTextEntry={true}
            value={''}
            containerStyle={styles.inputBox}
            onChange={() => {}}
          />
          <CustomInput
            placeholder={t(texts.yourNumber)}
            value={''}
            containerStyle={styles.inputBox}
            keyboardType={KEYBOARD_TYPE.NumberPad}
            onChange={() => {}}
            leftIcon={
              <AppPressable
                style={StyleBase.inRow}
                onPress={() => {
                  bottomSheetRef.current?.open();
                }}>
                <Image
                  source={{
                    uri:
                      FLAG_CDN_URL +
                      (
                        selectedCountry?.country_Cd ?? indiaCode
                      ).toLocaleLowerCase() +
                      PNG_FORMAT,
                  }}
                  style={styles.numberInput}
                />
                <Image source={images.arrowDown} style={styles.arrow} />
                <View style={styles.line} />
              </AppPressable>
            }
          />
          <AppButton
            onPress={() => navigate(RouteName.LOGIN)}
            title={t(texts.done)}
            style={styles.button}
          />
          <AppPressable onPress={goBack}>
            <AppText style={styles.cancelBtn}>{t(texts.cancel)}</AppText>
          </AppPressable>
        </View>
      </KeyboardScrollView>
      <BottomSheetComp
        ref={bottomSheetRef}
        snapPoints={500}
        draggableVisible={true}>
        <CustomInput
          leftIcon={<Image source={images.search} />}
          rigthIcon={
            search !== '' && (
              <AppPressable onPress={() => setSearch('')}>
                <Image source={images.searchCross} />
              </AppPressable>
            )
          }
          value={search}
          onChange={setSearch}
          placeholder={t(texts.search)}
        />
        <ScrollView>
          {filterData.map(country => flagRenderItem({item: country}))}
        </ScrollView>
      </BottomSheetComp>
    </AppBgImage>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  headingContainer: {
    paddingLeft: widthPixel(ConstNumber.VALUE_10),
    marginBottom: heightPixel(ConstNumber.VALUE_28),
  },
  headingText: {
    fontSize: fontPixel(ConstNumber.VALUE_50),
    fontFamily: fonts.Raleway.Bold,
    width: widthPixel(ConstNumber.VALUE_197),
    marginBottom: heightPixel(ConstNumber.VALUE_54),
  },
  innerContainer: {
    flex: ConstNumber.VALUE_1,
    paddingHorizontal: widthPixel(ConstNumber.VALUE_20),
  },
  inputBox: {marginVertical: heightPixel(ConstNumber.VALUE_4)},
  numberInput: {
    width: widthPixel(ConstNumber.VALUE_28),
    height: heightPixel(ConstNumber.VALUE_20),
    marginRight: widthPixel(ConstNumber.VALUE_6),
  },
  arrow: {marginLeft: widthPixel(ConstNumber.VALUE_8)},
  line: {
    height: heightPixel(ConstNumber.VALUE_20),
    width: widthPixel(ConstNumber.VALUE_1),
    marginLeft: widthPixel(ConstNumber.VALUE_6),
    backgroundColor: themes.dark.black,
  },
  button: {
    borderRadius: ConstNumber.VALUE_16,
    width: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_40),
    paddingVertical: heightPixel(ConstNumber.VALUE_20),
    marginTop: heightPixel(ConstNumber.VALUE_50),
  },
  cancelBtn: {
    textAlign: GlobalStyleValues.CENTER,
    marginTop: heightPixel(ConstNumber.VALUE_40),
    fontFamily: fonts.Poppins.Light,
    fontSize: fontPixel(ConstNumber.VALUE_15),
  },
  renderContainer: {
    borderRadius: ConstNumber.VALUE_9,
    paddingVertical: heightPixel(ConstNumber.VALUE_20),
    marginTop: heightPixel(ConstNumber.VALUE_50),
    backgroundColor: themes.light.gray.inputGray,
    flexDirection: GlobalStyleValues.ROW,
  },
  flag: {
    width: widthPixel(ConstNumber.VALUE_28),
    height: heightPixel(ConstNumber.VALUE_20),
    marginRight: widthPixel(ConstNumber.VALUE_6),
    marginLeft: widthPixel(ConstNumber.VALUE_10),
  },
  phoneText: {
    fontSize: fontPixel(ConstNumber.VALUE_16),
    marginLeft: widthPixel(ConstNumber.VALUE_10),
  },
  renderName: {
    fontSize: fontPixel(ConstNumber.VALUE_16),
    marginLeft: widthPixel(ConstNumber.VALUE_40),
  },
});
