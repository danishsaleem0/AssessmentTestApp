import {StyleSheet} from 'react-native';
import {SIZES, COLORS} from '../../constant';

export default styles = StyleSheet.create({
  headerView: {
    padding: SIZES.h50,
    paddingTop: SIZES.padding * 1.5,
    borderBottomEndRadius: SIZES.h70 * 2,
    borderBottomStartRadius: SIZES.h70 * 2,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: SIZES.h18,
    height: SIZES.h18,
  },
  logo: {
    width: SIZES.h75 * 1.3,
    height: SIZES.h75 * 1.3,
    alignSelf: 'center',
    bottom: '5.5%',
  },
  text: {
    marginLeft: SIZES.padding2,
  },
});
