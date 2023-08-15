import React, {Fragment, useState} from 'react';
import styles from './styles';
import {TextInput} from 'react-native';
import {COLORS} from '../../constant';
import {Text} from '../index';

export default function InputField({
  placeholder,
  secureText,
  keyboardType,
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
  title,
  showCount = true,
}) {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <Fragment>
      <Text text={title} style={styles.title} />
      <TextInput
        ref={forwardRef}
        autoCapitalize={autoCapitalize}
        numberOfLines={numberOfLines}
        scrollEnabled={scrollEnabled}
        onChangeText={onChangeText}
        multiline={multiline}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureText && hidePassword}
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
      {}
      {showCount && (
        <Text text={`${value.length}/${maxLength}`} style={styles.countText} />
      )}
    </Fragment>
  );
}
