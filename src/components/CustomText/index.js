import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

function CustomText({style, text, numberOfLines, onLayout}) {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[styles.text, style]}
      onLayout={onLayout}>
      {text}
    </Text>
  );
}

export default CustomText;
