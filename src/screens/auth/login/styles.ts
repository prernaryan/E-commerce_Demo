import {StyleSheet} from 'react-native';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
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
