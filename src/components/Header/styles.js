import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SIZES.large,
  },
  btn: {
    padding: SIZES.small,
  },

  rightBtn: {
    backgroundColor: COLORS.primary,
    height: SIZES.h40,
    width: SIZES.h40,
    borderRadius: SIZES.h50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...FONTS.Medium14,
    marginRight: SIZES.base,
    color: COLORS.black,
    paddingLeft: SIZES.small,
  },
  timeText: {
    ...FONTS.Regular10,
    marginRight: SIZES.base,
    color: COLORS.light_text_color,
    paddingLeft: SIZES.small,
  },
  emptyView: {
    width: SIZES.h20,
  },
  backBtn: {
    backgroundColor: COLORS.card_color,
    height: SIZES.h50,
    width: SIZES.h50,
    borderRadius: SIZES.padding2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: SIZES.h30 * 1.2,
    height: SIZES.h30 * 1.2,
  },
});
