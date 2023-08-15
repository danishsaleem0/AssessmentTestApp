import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Icon, Text} from '..';
import styles from './styles';
import {icons, images} from '../../constant';
import {goBack} from '../../navigation/NavigationRef';

export default function Header({
  title,
  postedTime,
  expireTime,
  isImage,
  imagePath,
  isBack = false,
  onLeftIconPress,
  onRightIconPress,
  showLeftIcon,
  showRightIcon,
}) {
  return (
    <View style={styles.container}>
      {isBack ? (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.backBtn}
          onPress={() => goBack()}>
          <Icon {...icons.backIcon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          disabled={!showLeftIcon}
          onPress={onLeftIconPress}
          style={!showLeftIcon ? styles.emptyView : styles.btn}
          activeOpacity={0.8}>
          {showLeftIcon && <Icon {...showLeftIcon} />}
        </TouchableOpacity>
      )}

      {title && (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {isImage && (
            <Image
              source={imagePath ? imagePath : images.carton_logo}
              style={styles.logo}
              resizeMode="contain"
            />
          )}
          <View>
            <Text text={title} style={styles.text} />
            {postedTime && (
              <Text
                text={`Posted at ${postedTime} | Expires in ${expireTime} `}
                style={styles.timeText}
              />
            )}
          </View>
        </View>
      )}
      {showRightIcon && (
        <TouchableOpacity
          disabled={!showRightIcon}
          onPress={onRightIconPress}
          style={styles.rightBtn}
          activeOpacity={0.8}>
          <Icon {...showRightIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
}
