import React from 'react';
import {Text} from '..';
import {View, StyleSheet} from 'react-native';
import { FONTS } from '../../constant';

function NoData({text}) {
  return (
    <View style={styles.NoDataView}>
      <Text text={text} style={styles.text} />
    </View>
  );
}

export default NoData;
const styles = StyleSheet.create({
  NoDataView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    ...FONTS.Medium15
  }
});
