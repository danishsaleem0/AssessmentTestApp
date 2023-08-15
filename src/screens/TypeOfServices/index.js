import React from 'react';
import {Button, Container, ProgressStepBar, Text} from '../../components';
import styles from './styles';
import {services} from '../../config';
import {Accordian} from './component';
import {View} from 'react-native';
import {navigate} from '../../navigation/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';

export default function CompanyDetails() {
  const renderAccordians = () => {
    const items = [];
    for (i = 0; i < services.length; i++) {
      items.push(<Accordian data={services[i]} key={[i].toString()} />);
    }
    return items;
  };

  const onContinuePress = () => {
    navigate(NavigationStrings.COMPANY_DETAILS);
  };
  return (
    <Container style={styles.container} scroll={true}>
      <ProgressStepBar step={4} />

      <Container style={styles.innerContainer}>
        <Text text={'What kind of service do you provide?'} />
        {renderAccordians()}
      </Container>
      <View style={styles.buttonView}>
        <Button text={'Continue'} onPress={onContinuePress} />
      </View>
    </Container>
  );
}
