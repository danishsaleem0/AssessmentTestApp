import React, {Fragment} from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';

export default function Container({children, scroll, style}) {
  return (
    <Fragment>
      {scroll ? (
        <ScrollView
          keyboardShouldPersistTaps="handxled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.container2, style]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.container, style]}>{children}</View>
      )}
    </Fragment>
  );
}
