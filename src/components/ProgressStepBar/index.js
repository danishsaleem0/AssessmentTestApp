import React, {Fragment} from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import {images} from '../../constant';
import Text from '../CustomText';

export default function ProgressStepBar({step}) {
  return (
    <Fragment>
      <View style={styles.headerView}>
        <Image
          source={images.starIcon}
          resizeMode="contain"
          style={styles.icon}
        />
        <Text text={'Trusted'} style={styles.text} />
      </View>
      <Image source={images.logo} style={styles.logo} resizeMode="contain" />
    </Fragment>
  );
}
