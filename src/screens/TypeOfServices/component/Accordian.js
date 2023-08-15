import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Platform,
  UIManager,
  LayoutAnimation,
  Image,
} from 'react-native';
import {Text} from '../../../components';
import styles from './styles';
import {COLORS, SIZES} from '../../../constant';
import CheckBox from '@react-native-community/checkbox';

export default function Accordian({data}) {
  const [expanded, setExpanded] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const cardBackground = {
    backgroundColor: expanded ? COLORS.primary : COLORS.white,
  };
  const textColor = {
    color: expanded ? COLORS.white : COLORS.text_color,
  };
  return (
    <TouchableOpacity
      onPress={toggleExpand}
      key={data.id}
      activeOpacity={0.8}
      style={[styles.card, cardBackground]}>
      <View style={styles.row}>
        <Image
          source={data.image}
          style={data.title === 'Shipper' ? styles.shipLogo : styles.logo}
          resizeMode="contain"
        />
        <View style={{flex: 0.9}}>
          <Text text={data.title} style={textColor} />
          <Text
            text={data.description}
            style={[styles.descriptionText, textColor]}
          />
        </View>
      </View>
      {expanded &&
        data.service.map((name, index) => (
          <View
            key={index.toString()}
            activeOpacity={0.8}
            style={styles.checkboxView}>
            <TouchableOpacity style={{paddingRight: 15}}>
              <CheckBox
                onCheckColor={COLORS.white}
                boxType="square"
                disabled={false}
                tintColor={COLORS.white}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
                style={styles.checkBox}
              />
            </TouchableOpacity>
            <Text
              style={[
                styles.descriptionText,
                textColor,
                {paddingLeft: SIZES.base * 2},
              ]}
              text={name}
            />
          </View>
        ))}
    </TouchableOpacity>
  );
}
