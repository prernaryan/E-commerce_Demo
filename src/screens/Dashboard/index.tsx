import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AppBgImage from '../../component/resuableComponent/appBgImage';
import {images} from '../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppText} from '../../component/resuableComponent/appText';
import fonts from '../../constants/fonts';
import AppPressable from '../../component/resuableComponent/appPressable';
import {SCREEN_WIDTH} from '../../utils/responsive';

type Props = {};

const SaleData = [
  {id: 1, text: 'All'},
  {id: 2, text: '10%'},
  {id: 3, text: '20%'},
  {id: 4, text: '30%'},
  {id: 5, text: '40%'},
  {id: 6, text: '50%'},
];

const Dashboard = (props: Props) => {
  const {top} = useSafeAreaInsets();
  const [selectedDiscount, setSelectedDiscount] = React.useState<string | null>(
    null,
  );

  const renderTimerBox = (value: string) => (
    <View style={styles.timerBox}>
      <AppText style={styles.timerText}>{value}</AppText>
    </View>
  );

  return (
    <AppBgImage source={images.dashboardBg}>
      <View style={[styles.container, {marginTop: top + 12}]}>
        <View style={styles.header}>
          <AppText style={styles.title}>Flash Sale</AppText>
          <View style={styles.timerContainer}>
            <Image source={images.whiteClock} style={styles.clockIcon} />
            {renderTimerBox('00')}
            {renderTimerBox('36')}
            {renderTimerBox('58')}
          </View>
        </View>
        <AppText style={styles.subTitle}>Choose Your Discount</AppText>
        <View style={styles.saleItems}>
          {SaleData.map(item => (
            <AppPressable
              key={item.id}
              onPress={() => setSelectedDiscount(item.text)}
              style={[
                styles.saleItem,
                selectedDiscount === item.text && styles.selectedSaleItem,
              ]}>
              <AppText style={styles.saleText}>{item.text}</AppText>
            </AppPressable>
          ))}
        </View>
        <View style={styles.articleContainer}>
          <AppText>ARTICALE REIMAGINED</AppText>
        </View>
      </View>
    </AppBgImage>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.Raleway.Bold,
    fontSize: 28,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    marginRight: 10,
  },
  timerBox: {
    height: 27,
    width: 30,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  timerText: {
    color: 'black',
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: fonts.Raleway.Medium,
    fontSize: 14,
  },
  saleItems: {
    marginTop: 22,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  saleItem: {
    marginVertical: 4,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#F9F9F9',
    position: 'relative', // Ensure positioning doesn't affect siblings
    zIndex: 1,
  },
  selectedSaleItem: {
    height: 50, // Increase height of selected item
    borderWidth: 2,
    alignItems: 'center',
    borderColor: 'blue',
    zIndex: 10, // Elevate selected item above others
  },
  saleText: {
    fontFamily: fonts.Raleway.Bold,
    fontSize: 13,
  },
  articleContainer: {
    width: SCREEN_WIDTH - 40,
    backgroundColor: '#F9F9F9',
    marginTop: 16,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
