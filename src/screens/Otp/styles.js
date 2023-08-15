import {StyleSheet} from 'react-native';
import {FONTS, SIZES, COLORS} from '../../constant';

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  headingText: {
    textAlign: 'center',
    ...FONTS.Regular20,
    width: '60%',
    alignSelf: 'center',
    paddingBottom: SIZES.padding,
  },
  innerContainer: {
    paddingHorizontal: SIZES.padding * 1.6,
    bottom: '5%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: SIZES.padding2,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cell: {
    width: SIZES.h57,
    borderColor: COLORS.text_color,
    borderWidth: 2,
    height: SIZES.h57,
    lineHeight: SIZES.h57,
    textAlign: 'center',
    borderRadius: SIZES.padding2 * 1.4,
  },

  focusCell: {
    borderColor: COLORS.text_color,
  },
  buttonView: {
    alignItems: 'center',
    paddingHorizontal: SIZES.base * 2,
  },

  editText: {
    paddingHorizontal: SIZES.base,
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.red,
    color: COLORS.red,
    ...FONTS.Regular11,
  },
  resendButton: {
    color: COLORS.red,
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendText: {
    paddingHorizontal: SIZES.base,
    color: COLORS.red,
    ...FONTS.Medium12,
  },
  lightText: {
    color: COLORS.light_text_color,
    ...FONTS.Regular12,
    paddingRight: SIZES.medium,
  },
  timeText: {
    color: COLORS.primary,
    ...FONTS.Regular12,
  },
  root: {
    justifyContent: 'space-between',
    paddingVertical: SIZES.large,
  },
});
