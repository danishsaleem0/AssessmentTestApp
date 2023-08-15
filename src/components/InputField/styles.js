import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export default styles = StyleSheet.create({
  input: {
    paddingHorizontal: SIZES.padding2,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.white,
    height: SIZES.h55,
    marginVertical: SIZES.base,
    borderColor: COLORS.secondary,
    borderWidth: 1,
    ...FONTS.Regular12,
    color: '#696F79',
  },
  title: {
    ...FONTS.Regular11,
  },
  countText: {
    color: '#515151',
    ...FONTS.Regular9,
    alignSelf: 'flex-end',
    paddingRight: SIZES.small / 2,
  },
});
