import React, {useRef, useState} from 'react';
import {Button, Container, ProgressStepBar, Text} from '../../components';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {images} from '../../constant';
import {PhoneInputField} from './component';
import {navigate} from '../../navigation/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';

export default function SignIn() {
  const numberRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');

  const onGetStartedPress = () => {
    navigate(NavigationStrings.OTP);
  };
  return (
    <Container style={styles.container} scroll={true}>
      <ProgressStepBar step={0} />

      <View style={styles.mainView}>
        <Text
          text={'Hello, Enter mobile number to get started'}
          style={styles.headingText}
        />
        <PhoneInputField
          placeholder={'Mobile number'}
          forwardRef={numberRef}
          maxLength={10}
          onChangeText={text => setPhoneNumber(text)}
          onSubmitEditing={onGetStartedPress}
          value={phoneNumber}
        />
      </View>

      <View style={styles.footerView}>
        <View style={styles.row}>
          <Text
            text={'By signing up, you accept our'}
            style={styles.lightText}
          />

          <TouchableOpacity activeOpacity={0.7}>
            <Text text={' Terms of use '} style={styles.policyText} />
          </TouchableOpacity>

          <Text text={' & '} style={styles.lightText} />
          <TouchableOpacity>
            <Text
              text={'Privacy Policy'}
              style={styles.policyText}
              activeOpacity={0.7}
            />
          </TouchableOpacity>
        </View>
        <Button text={'Get Started'} onPress={onGetStartedPress} />
      </View>
    </Container>
  );
}
