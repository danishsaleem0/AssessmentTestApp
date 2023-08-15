import {RFValue} from 'react-native-responsive-fontsize';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#0066FF',
  secondary: '#8692A6',
  white: '#FFFFFF',
  background: '#F1F1F1',
  text_color: '#515151',
  light_text_color: '#6E6E6E',
  transparent: 'transparent',
  black: '#212121',
  red: '#F95A2C',
  place_holder_color: '#D4D4D4',
  shadowColor: 'rgba(0, 0, 0, 0.5)',
  enabled: '#2ECC71',
  disabled: '#F66262',
  card_color: '#DBE4FF',
};

export const SIZES = {
  // global sizes
  small: 5,
  base: 8,
  medium: 10,
  large: 18,
  radius: 30,
  padding: 20,
  padding2: 12,

  // font sizes
  h9: 9,
  h9_5: 9.5,
  h10: 10,
  h11: 11,
  h12: 12,
  h13: 13,
  h14: 14,
  h15: 15,
  h16: 16,
  h17: 17,
  h18: 18,
  h19: 19,
  h20: 20,
  h21: 21,
  h22: 22,
  h23: 23,
  h24: 24,
  h25: 25,
  h26: 26,
  h27: 27,
  h28: 28,
  h30: 30,
  h35: 35,
  h40: 40,
  h50: 50,
  h52: 52,
  h55: 55,
  h57: 57,
  h70: 70,
  h75: 75,
  // app dimensions
  width,
  height,
};

export const FONTS = {
  Bold16: {
    fontFamily: 'Poppins-Bold',
    fontSize: RFValue(SIZES.h16),
  },

  SemiBold16: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(SIZES.h16),
  },
  SemiBold12: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RFValue(SIZES.h12),
  },

  Medium16: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h16),
  },
  Medium15: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h15),
  },
  Medium14: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h14),
  },
  Medium13: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h13),
  },
  Medium12: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h12),
  },
  Medium10: {
    fontFamily: 'Poppins-Medium',
    fontSize: RFValue(SIZES.h10),
  },

  Regular20: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h20),
  },

  Regular14: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h14),
  },

  Regular13: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h13),
  },
  Regular12: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h12),
  },
  Regular11: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h11),
  },
  Regular10: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h10),
  },

  Regular9_5: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h9_5),
  },
  Regular9: {
    fontFamily: 'Poppins-Regular',
    fontSize: RFValue(SIZES.h9),
  },
};

const appTheme = {FONTS, SIZES, COLORS};

export default appTheme;
