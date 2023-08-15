import React from 'react';
import {Image, View} from 'react-native';
import {Text} from '../../../components';
import styles from '../styles';
import {images} from '../../../constant';

export default function StepBar({activeStep, steps}) {
  return (
    <View style={styles.flexView}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <Image
              source={images.line}
              style={styles.lineImg}
              resizeMode="contain"
            />
          )}
          <View style={styles.row2}>
            <View style={styles.imageView}>
              <Image
                source={step.image}
                style={styles.img}
                resizeMode="contain"
              />
            </View>
            <Text
              text={activeStep === index && step.title}
              style={styles.text}
            />
          </View>
        </React.Fragment>
      ))}
    </View>
  );
}
