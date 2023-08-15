import React, {Fragment} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Text} from '../../../components/index';
import {COLORS, FONTS, SIZES} from '../../../constant';

const PhoneInputField = ({
  style,
  placeholder,
  defaultValue,
  onFocus,
  forwardRef,
  isEdit,
  inputStyle,
  maxLength,
  onChangeText,
  onSubmitEditing,
  autoCapitalize = 'none',
  value,
  multiline,
  scrollEnabled,
  numberOfLines,
}) => {
  return (
    <Fragment>
      <View style={[styles.main_view, style]}>
        <Text text={'+91'} style={styles.text} />
        <TextInput
          ref={forwardRef}
          autoCapitalize={autoCapitalize}
          numberOfLines={numberOfLines}
          scrollEnabled={scrollEnabled}
          onChangeText={onChangeText}
          multiline={multiline}
          keyboardType={'numeric'}
          placeholder={placeholder}
          style={[styles.input, inputStyle]}
          placeholderTextColor={COLORS.place_holder_color}
          defaultValue={defaultValue}
          value={value}
          onFocus={onFocus}
          maxLength={maxLength}
          editable={isEdit}
          underlineColorAndroid="transparent"
          blurOnSubmit={false}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
      <Text text={`${value.length}/10`} style={styles.countText} />
    </Fragment>
  );
};
const styles = StyleSheet.create({
  main_view: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding2,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.white,
    height: SIZES.h55,
    marginVertical: SIZES.base,
    borderColor: COLORS.secondary,
    borderWidth: 1,
  },
  countText: {
    color: '#515151',
    ...FONTS.Regular9,
    alignSelf: 'flex-end',
    paddingRight: SIZES.small / 2,
  },
  text: {
    width: '10%',
    color: '#696F79',
    ...FONTS.Medium13,
  },
  input: {
    flex: 1,
    ...FONTS.Medium13,
    color: '#696F79',
    height: SIZES.h55,
  },
});

export default PhoneInputField;
