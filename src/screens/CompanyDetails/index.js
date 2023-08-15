import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import {
  Button,
  Container,
  InputField,
  ProgressStepBar,
  Text,
} from '../../components';
import styles from './styles';
import {navigate} from '../../navigation/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';

export default function CompanyDetails() {
  const nameRef = useRef(null);
  const homeCityRef = useRef(null);
  const passwordRef = useRef(null);

  const [name, setName] = useState('');
  const [homeCity, setHomeCity] = useState('');
  const [password, setPassword] = useState('');

  const onGetStartedPress = () => {
    navigate(NavigationStrings.MAIN_STACK);
  };
  return (
    <Container style={styles.container} scroll={true}>
      <ProgressStepBar step={5} />

      <Container style={styles.innerContainer}>
        <Text text={'Tell us more about your company.'} />

        <View style={styles.mainView}>
          <InputField
            placeholder={'Name'}
            title={'Company/Person name'}
            forwardRef={nameRef}
            onSubmitEditing={() => homeCityRef.current.focus()}
            onChangeText={text => setName(text)}
            value={name}
            maxLength={100}
          />
          <InputField
            placeholder={'Select Your City'}
            title={'Home/City'}
            forwardRef={homeCityRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={text => setHomeCity(text)}
            value={homeCity}
            maxLength={150}
          />

          <InputField
            placeholder={'*******'}
            title={'Password'}
            forwardRef={passwordRef}
            onSubmitEditing={() => onGetStartedPress()}
            onChangeText={text => setPassword(text)}
            value={password}
            secureText={true}
            showCount={false}
            maxLength={10}
          />
        </View>
      </Container>
      <View style={styles.buttonView}>
        <Button text={'Get Started'} onPress={onGetStartedPress} />
      </View>
    </Container>
  );
}
