import {StyleSheet} from 'react-native';
import {SIZES, COLORS, FONTS} from '../../constant';

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },

  mainView: {
    flex: 1,
    paddingHorizontal: SIZES.base * 2,
    bottom: '3%',
  },

  headingText: {
    textAlign: 'center',
    paddingBottom: SIZES.padding2,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lightText: {
    ...FONTS.Regular9,
  },
  policyText: {
    ...FONTS.Regular9,
    color: COLORS.primary,
  },
  footerView: {
    alignItems: 'center',
  },
});
