import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Container, Icon, ProgressStepBar, Text} from '../../components';
import {
  CodeField,
  Cursor,
  isLastFilledCell,
  MaskSymbol,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles from './styles';
import {icons} from '../../constant';
import {navigate} from '../../navigation/NavigationRef';
import NavigationStrings from '../../navigation/NavigationStrings';

export default function Otp() {
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;
    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="-"
          isLastFilledCell={isLastFilledCell({index, value})}>
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }
    return (
      <View key={index.toString()}>
        <Text
          text={textChild}
          onLayout={getCellOnLayoutHandler(index)}
          style={[styles.cell, isFocused && styles.focusCell]}
        />
      </View>
    );
  };

  const onContinuePress = () => {
    navigate(NavigationStrings.TYPE_OF_SERVICES);
  };
  return (
    <Container style={styles.container} scroll={true}>
      <ProgressStepBar step={2} />

      <Container style={styles.innerContainer}>
        <Text
          text={'Please Enter OTP Verification'}
          style={styles.headingText}
        />

        <View>
          <View style={styles.row}>
            <Text
              text={'Code was sent to +91 9999 999**9'}
              style={styles.lightText}
            />
            <TouchableOpacity>
              <Text text={'edit'} style={styles.editText} />
            </TouchableOpacity>
          </View>
          <View style={[styles.row]}>
            <Text text={'This code will expire in '} style={styles.lightText} />
            <Text text={'03:48'} style={styles.timeText} />
          </View>

          <CodeField
            ref={ref}
            {...props}
            rootStyle={styles.root}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />
        </View>

        <View style={styles.row2}>
          <Text text={'Didn’t receive an OTP? '} style={styles.lightText} />
          <TouchableOpacity style={styles.resendButton} activeOpacity={0.6}>
            <Icon {...icons.resendIcon} />
            <Text text={'Resend'} style={styles.resendText} />
          </TouchableOpacity>
        </View>
      </Container>

      <View style={styles.buttonView}>
        <Button text={'Continue'} onPress={onContinuePress} />
        <Button text={'Skip'} isTransparent={true} onPress={onContinuePress} />
      </View>
    </Container>
  );
}
