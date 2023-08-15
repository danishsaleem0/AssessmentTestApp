import {StyleSheet} from 'react-native';
import {FONTS, SIZES, COLORS} from '../../constant';

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  mainView: {
    flex: 1,
    paddingTop: SIZES.padding * 1.8,
  },
  buttonView: {
    alignItems: 'center',
  },
  innerContainer: {
    bottom: '5%',
  },
});
