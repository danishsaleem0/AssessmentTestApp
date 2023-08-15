import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

const styles = StyleSheet.create({
  btn: {
    marginVertical: SIZES.padding2,
    height: SIZES.h52,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.base,
    width: '90%',
  },
  text: {
    color: COLORS.white,
    ...FONTS.Medium14,
  },
  transparentText: {
    color: COLORS.primary,
    ...FONTS.Medium14,
  },
  transparentBtn: {
    marginVertical: SIZES.padding2,
    height: SIZES.h52,
    borderColor: COLORS.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.base,
    width: '90%',
  },
});

export default styles;
