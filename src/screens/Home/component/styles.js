import {StyleSheet} from 'react-native';
import {FONTS, COLORS, SIZES} from '../../../constant';

export default styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.base,
    flex: 1,
    overflow: 'hidden',
    borderRadius: SIZES.base * 2.5,
  },
  marker: {
    height: SIZES.h50 * 1.2,
    width: SIZES.h50 * 1.2,
    transform: [{rotate: '120deg'}],
  },
});
