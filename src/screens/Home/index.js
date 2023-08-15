import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  LayoutAnimation,
  Platform,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import {Container, Header, Icon, Text} from '../../components';
import styles from './styles';
import {COLORS, icons, SIZES, images, FONTS} from '../../constant';
import {Map, StepBar} from './component';
import {bidData, lorriesData, steps} from '../../config';
import {baseGestureHandlerProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollToIndex({
      index: index,
      animated: true,
      viewPosition: 0.5,
    });
  }, [index]);
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  const onLeftArrowPress = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };
  const onRightArrowPress = () => {
    if (index === lorriesData.length - 1) {
      return;
    }
    setIndex(index + 1);
  };
  const renderLorriesDetails = ({item}) => {
    return (
      <View style={styles.container}>
        <Image
          source={item.vahicleImage}
          style={styles.vahicleImage}
          resizeMode="contain"
        />
        <Text text={item.vehicleNumber} style={styles.vehicleNumberText} />

        <View style={styles.card}>
          <View style={{padding: SIZES.padding2}}>
            <View style={styles.firstView}>
              <Image
                source={item.driverProfile}
                style={styles.driverProfile}
                resizeMode="contain"
              />
              <View style={styles.transportView}>
                <Text
                  text={item.transportType}
                  style={styles.transportTypeText}
                />
                <Image
                  source={images.varified_icon}
                  resizeMode="contain"
                  style={styles.varifiedIcon}
                />
              </View>

              <View style={styles.ratingView}>
                <Image
                  source={images.rating_icon}
                  resizeMode="contain"
                  style={styles.ratingIcon}
                />
                <Text text={item.rating} style={styles.ratingText} />
              </View>
            </View>

            <Text text={item.postedTime} style={styles.postedText} />

            <View style={[styles.flex, {justifyContent: 'flex-start'}]}>
              <Icon {...icons.dotIcon} />
              <Text text={item.truckDetail} style={styles.lighText2} />
            </View>

            <View style={[styles.flex, {justifyContent: 'flex-start'}]}>
              <Icon {...icons.dotIcon} />
              <Text text={item.availability} style={styles.lighText2} />
            </View>

            <View style={[styles.flex, {paddingBottom: SIZES.base}]}>
              <Text text={item.message} style={styles.messageText} />
              <TouchableOpacity>
                <Text
                  text={'+More'}
                  numberOfLines={1}
                  style={styles.moreText}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.expireView}>
              <Text
                text={`Expires in ${item.expireTime}`}
                style={styles.expireText2}
              />
            </View>

            <TouchableOpacity style={styles.bookNowButton} activeOpacity={0.8}>
              <Icon {...icons.phoneIcon} />
              <Text text={'Book Now'} style={styles.bookNowText} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderBidDetails = ({item}) => {
    return (
      <View
        style={[
          styles.card,
          styles.shadow,
          {width: SIZES.width - SIZES.h30 * 2},
        ]}>
        <View style={{padding: SIZES.padding2}}>
          <View style={styles.firstView}>
            <Image
              source={item.driverProfile}
              style={styles.driverProfile}
              resizeMode="contain"
            />
            <View
              style={[
                styles.transportView,
                {flexDirection: 'column', alignItems: 'flex-start'},
              ]}>
              <View style={styles.flex}>
                <Text
                  text={item.transportType}
                  style={[styles.transportTypeText, {...FONTS.Medium12}]}
                />
                <Image
                  source={images.varified_icon}
                  resizeMode="contain"
                  style={styles.varifiedIcon}
                />
              </View>
              <Text text={item.location} style={styles.locationText2} />
            </View>

            <View style={styles.ratingView}>
              <Image
                source={images.rating_icon}
                resizeMode="contain"
                style={styles.ratingIcon}
              />
              <Text text={item.rating} style={styles.ratingText} />
            </View>
          </View>

          <View
            style={[
              styles.flex,
              {justifyContent: 'flex-start', paddingVertical: SIZES.padding2},
            ]}>
            <Image source={item.vahicleImage} style={styles.vahicleImage2} />
            <Text text={`   ${item.availability}`} style={styles.lighText2} />
          </View>

          <View style={{paddingBottom: SIZES.base}}>
            <Text text={item.message} style={[styles.messageText]} />
          </View>

          <View style={{alignItems: 'flex-end'}}>
            <View style={styles.statusView2}>
              <TouchableOpacity>
                <Text
                  text={'+More'}
                  numberOfLines={1}
                  style={styles.moreText}
                />
              </TouchableOpacity>
              <Text
                text={item.status}
                numberOfLines={1}
                style={styles.statusText2}
              />
            </View>
          </View>
        </View>

        <View style={styles.flex}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.commonButton2,
              styles.shadow,
              {backgroundColor: COLORS.white},
            ]}>
            <Icon
              {...icons.disableIcon}
              style={styles.commonIcon}
              color={COLORS.disabled}
            />

            <Text
              text={'Cancel'}
              style={[styles.commonText, {color: COLORS.disabled}]}
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.commonButton2}>
            <Icon {...icons.checkIcon} style={styles.commonIcon} />

            <Text text={'Accept'} style={styles.commonText} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <Container scroll={true}>
      <Header
        isBack={true}
        title={'Load Details'}
        postedTime={'9:30 am'}
        expireTime={'20 hours'}
        isImage={true}
      />

      <View style={styles.row}>
        <View style={styles.row}>
          <Text text={'Bangalore/KA'} style={styles.locationText} />

          <Icon
            {...icons.rightArrowIcon}
            style={{marginHorizontal: SIZES.medium}}
          />
          <Text text={'Anantpuram/AP'} style={styles.locationText} />
        </View>

        <TouchableOpacity
          style={styles.accordianButton}
          activeOpacity={0.8}
          onPress={toggleExpand}>
          <Text text={'Map'} style={styles.mapText} />
          {expanded ? <Icon {...icons.upIcon} /> : <Icon {...icons.down} />}
        </TouchableOpacity>
      </View>
      {expanded && <Map />}
      <StepBar steps={steps} activeStep={activeStep} />

      <View style={styles.detailView}>
        <View style={[styles.flex, {alignItems: 'flex-start'}]}>
          <View style={styles.commonView}>
            <Image source={images.material_icon} style={styles.icons} />
            <Text text={'Materials'} style={styles.detailsText} />
          </View>

          <View style={styles.statusView}>
            <Text text={'Inprogress'} style={styles.statusText} />
          </View>
        </View>

        <View style={styles.commonView}>
          <Image source={images.truck_icon} style={styles.icons} />
          <Text text={'24,000 ton Truck'} style={styles.detailsText} />
        </View>

        <View style={styles.commonView}>
          <Image source={images.payment_icon} style={styles.icons} />
          <Text text={'To be Billed'} style={styles.detailsText} />
        </View>

        <View style={styles.flex}>
          <Text
            text={'Waiting for the best bids, expires in 4 hours.'}
            style={styles.expireText}
          />
          <TouchableOpacity activeOpacity={0.7} style={{paddingLeft: 10}}>
            <Icon {...icons.editIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.commonButton,
            {backgroundColor: COLORS.disabled, width: '35%'},
          ]}>
          <Icon {...icons.disableIcon} style={{marginRight: 10}} />

          <Text text={'Disable'} style={styles.commonText} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.commonButton}>
          <Image
            source={images.whatsapp_icon}
            style={styles.buttonIcon}
            resizeMode="contain"
          />
          <Text text={'Share on WhatsApp'} style={styles.commonText} />
        </TouchableOpacity>
      </View>

      <View style={styles.commonCardView}>
        <View
          style={[
            styles.flex,
            {justifyContent: 'flex-start', paddingBottom: SIZES.base * 2},
          ]}>
          <Text text={'Live Lorries '} style={styles.commonCardText} />
          <Text
            style={styles.lighText}
            text={`${
              lorriesData.length < 10
                ? `(0${lorriesData.length})`
                : lorriesData.length
            }`}
          />
        </View>

        <View style={[styles.flex, styles.scrollView]}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.scrollButton}
            onPress={onLeftArrowPress}>
            <Icon {...icons.leftIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.scrollButton}
            onPress={onRightArrowPress}>
            <Icon {...icons.rightIcon} />
          </TouchableOpacity>
        </View>

        <FlatList
          ref={ref}
          initialScrollIndex={index}
          onScrollToIndexFailed={info => {
            const wait = new Promise(resolve => setTimeout(resolve, 500));
            wait.then(() => {
              ref.current?.scrollToIndex({index: info.index, animated: true});
            });
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          keyExtractor={item => item.id}
          data={lorriesData}
          renderItem={renderLorriesDetails}
        />
      </View>

      <View style={styles.commonCardView}>
        <View
          style={[
            styles.flex,
            {justifyContent: 'flex-start', paddingBottom: SIZES.base * 2},
          ]}>
          <Text text={'Bid Response '} style={styles.commonCardText} />
          <Text
            style={styles.lighText}
            text={`${
              bidData.length < 10 ? `(0${bidData.length})` : bidData.length
            }`}
          />
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          keyExtractor={item => item.id}
          data={bidData}
          renderItem={renderBidDetails}
        />
      </View>
    </Container>
  );
}
