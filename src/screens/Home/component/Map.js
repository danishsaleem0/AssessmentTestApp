import React, {useState} from 'react';
import {Image, LayoutAnimation, Platform, UIManager, View} from 'react-native';
import {Text} from '../../../components';
import MapView, {Marker, PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import styles from './styles';
import {COLORS, images} from '../../../constant';

export default function Map({}) {
  const initialRegion = {
    latitude: 24.860207,
    longitude: 67.0535164,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const coordinates = [
    {latitude: 24.860207, longitude: 67.0535164},
    {latitude: 24.8930737, longitude: 67.2283137},
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={{height: 180}}
        mapType="terrain"
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}>
        <Polyline
          lineJoin="bevel"
          coordinates={coordinates}
          strokeColor={COLORS.primary}
          strokeWidth={3}
        />
        <Marker coordinate={initialRegion} title="My Location">
          <Image
            source={images.map_marker}
            style={styles.marker}
            resizeMode="contain"
          />
        </Marker>
      </MapView>
    </View>
  );
}
