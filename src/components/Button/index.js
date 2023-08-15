import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {Text} from '..';

export default function Button({
  text,
  textStyle,
  onPress,
  btnStyle,
  disabled,
  isTransparent = false,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[isTransparent ? styles.transparentBtn : styles.btn, btnStyle]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[
          textStyle,
          isTransparent ? styles.transparentText : styles.text,
        ]}
        text={text}
      />
    </TouchableOpacity>
  );
}
