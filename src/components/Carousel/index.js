import React, {useEffect, useState, useRef} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {View, Text, Button} from 'react-native-ui-lib';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './item';
import {ENTRIES1} from '../../data/entries';
import {images, FONTS, SIZES, COLORS, icons} from '../../constants';
const {width: screenWidth} = Dimensions.get ('window');

const CarouselCards = props => {
  const {images} = props;
  const [index, setIndex] = useState (0);
  const isCarousel = useRef (null);
  const carouselRef = useRef (null);

  useEffect (() => {}, []);

  const goForward = () => {
    carouselRef.current.snapToNext ();
  };

  const goBack = () => {
    carouselRef.current.snapToBack ();
  };

  return (
    <View center marginB-20>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 90}
        data={images}
        renderItem={CarouselCardItem}
        hasParallaxImages={true}
        onSnapToItem={index => setIndex (index)}
      />
      <Pagination
        containerStyle={{position: 'absolute', bottom: -45}}
        dotsLength={images.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: COLORS.primary,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCards;
