import React from 'react';
import {StyleSheet, Dimensions, Image, Platform} from 'react-native';
import {View, Text, Card} from 'react-native-ui-lib';
import {ParallaxImage} from 'react-native-snap-carousel';
import {COLORS} from '../../constants';

export const SLIDER_WIDTH = Dimensions.get ('window').width + 80;
export const ITEM_WIDTH = Math.round (SLIDER_WIDTH * 0.7);
const {width: screenWidth} = Dimensions.get ('window');

const CarouselCardItem = ({item, index}, parallaxProps) => {
  return (
    <Card marginB-17 key={index} style={styles.item}>
      <ParallaxImage
        source={{uri: item.uri}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
      <Text text70M style={styles.text}>
        {item.label}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create ({
  item: {
    width: screenWidth - 90,
    height: screenWidth - 90,
  },
  text: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    padding: 5,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select ({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  header: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    padding: 20,
    paddingTop: 10,
  },
});

export default CarouselCardItem;
