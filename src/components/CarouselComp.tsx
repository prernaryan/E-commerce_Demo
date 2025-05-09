import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {
  fontPixel,
  heightPixel,
  SCREEN_WIDTH,
  widthPercent,
  widthPixel,
} from '../utils/responsive';
import {ConstNumber, GlobalStyleValues, images} from '../constants';
import {CarouselData} from '../constants/mockData/CarousalData';

interface CarouselItem {
  title: string;
  des: string;
  forwhom: string;
  color: string;
}

const CarouselComp: React.FC = () => {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={ref}
        width={SCREEN_WIDTH - 32}
        height={SCREEN_WIDTH / 2}
        data={CarouselData}
        onProgressChange={progress}
        renderItem={({item}: {item: CarouselItem}) => (
          <View style={[styles.carouselItem, {backgroundColor: item.color}]}>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.des}</Text>
              <Text style={styles.forWhom}>{item.forwhom}</Text>
            </View>
            <Image
              source={images.CHILD_IMG}
              style={styles.image}
              resizeMode={GlobalStyleValues.CONTAIN}
            />
          </View>
        )}
      />
      <Pagination.Basic
        progress={progress}
        data={CarouselData}
        dotStyle={styles.dotStyle}
        containerStyle={{
          gap: ConstNumber.VALUE_5,
          marginTop: heightPixel(ConstNumber.VALUE_10),
        }}
        onPress={onPressPagination}
        activeDotStyle={{backgroundColor: '#6055D8'}}
      />
    </View>
  );
};

export default CarouselComp;

interface Styles {
  carouselContainer: ViewStyle;
  carouselItem: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  forWhom: TextStyle;
  image: ImageStyle;
  dotStyle: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  carouselContainer: {
    alignSelf: GlobalStyleValues.CENTER,
    paddingHorizontal: widthPercent(ConstNumber.VALUE_8),
  },
  carouselItem: {
    width: SCREEN_WIDTH - widthPixel(ConstNumber.VALUE_32),
    flexDirection: GlobalStyleValues.ROW,
    alignItems: GlobalStyleValues.CENTER,
    justifyContent: GlobalStyleValues.SPACE_BETWEEN,
    paddingHorizontal: widthPixel(ConstNumber.VALUE_20),
    borderRadius: widthPixel(ConstNumber.VALUE_12),
    flex: ConstNumber.VALUE_1,
  },
  title: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    fontWeight: '600',
    color: '#fff',
  },
  description: {
    fontSize: fontPixel(ConstNumber.VALUE_20),
    color: '#fff',
    marginTop: heightPixel(ConstNumber.VALUE_4),
    fontWeight: 'bold',
  },
  forWhom: {
    fontSize: fontPixel(ConstNumber.VALUE_14),
    fontWeight: '600',
    color: '#fff',
    marginTop: heightPixel(ConstNumber.VALUE_4),
  },
  image: {
    height: heightPixel(ConstNumber.VALUE_220),
    width: widthPixel(ConstNumber.VALUE_140),
  },
  dotStyle: {
    backgroundColor: '#B0AEAE',
    borderRadius: widthPixel(ConstNumber.VALUE_10),
    height: widthPixel(ConstNumber.VALUE_10),
    width: widthPixel(ConstNumber.VALUE_10),
  },
});
