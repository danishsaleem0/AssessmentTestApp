import {StyleSheet} from 'react-native';
import {SIZES, FONTS, COLORS} from '../../../constant';

export default styles = StyleSheet.create({
  card: {
    padding: SIZES.base * 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: SIZES.medium,
    borderRadius: SIZES.large,
  },

  titleText: {},
  descriptionText: {
    ...FONTS.Regular11,
    paddingTop: SIZES.small,
  },
  logo: {
    width: SIZES.h50 * 1.5,
    height: SIZES.h50 * 1.5,
  },
  shipLogo: {
    width: SIZES.h50 * 1.2,
    height: SIZES.h50 * 1.2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    paddingBottom: SIZES.base * 2,
  },
  checkboxView: {
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxborder: {
    borderWidth: 2,
    borderColor: COLORS.white,
    height: SIZES.h22,
    width: SIZES.h22,
    borderRadius: SIZES.base,
  },
  checkBox: {height: SIZES.h20, width: SIZES.h20},
});
