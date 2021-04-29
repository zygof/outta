import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import styles from './ReductionStyles';
import {SCREENS} from '../../constants';
import {icons, SIZES, COLORS, FONTS} from '../../constants';
import {View, Text, Card, Button} from 'react-native-ui-lib';

export const ReductionComponent = props => {
  const {discountItem, navigation, currentLocation} = props;
  let discount = discountItem.item;

  const colorJourRestant = () => {
    const dayDuration = discount.timeRemaining.dayDuration;
    switch (true) {
      case dayDuration <= 0:
        return COLORS.secondary;
      case dayDuration <= 3:
        return COLORS.danger;
      case dayDuration <= 7:
        return COLORS.warning;
      case dayDuration > 7:
        return COLORS.success;
      default:
        ('');
    }
  };

  const ingredientLabel = () => {
    let ingredientLabel = '';
    discount.food.ingredients.map (
      ingredient =>
        (ingredientLabel +=
          (ingredientLabel != '' ? ' - ' : '') + ingredient.name)
    );
    return ingredientLabel;
  };

  return (
    <Card
      marginB-12
      padding-10
      paddingB-15
      borderRadius={0}
      /*onPress={() =>
        navigation.navigate(SCREENS.RESTAURANT, {
          restaurantId: discount.restaurant.id,
          currentLocation,
        })
      }*/
    >
      {/* Image */}
      <View marginB-10>
        <Image
          source={{uri: discount.food.images[0].uri}}
          resizeMode="cover"
          style={{
            width: '100%',
            height: 180,
            borderRadius: SIZES.radius * 0.2,
          }}
        />

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            height: 35,
            width: SIZES.width * 0.2,
            backgroundColor: COLORS.primary,
            borderTopRightRadius: SIZES.radius * 0.5,
            borderBottomLeftRadius: SIZES.radius * 0.2,
            alignItems: 'center',
            justifyContent: 'center',
            ...styles.shadow,
          }}
        >
          <Text text65M color={COLORS.white}>
            -{discount.discountPct} %
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: 35,
            flex: 1,
            flexDirection: 'row',
            width: SIZES.width * 0.37,
            backgroundColor: COLORS.primary,
            borderTopRightRadius: SIZES.radius * 0.2,
            borderBottomLeftRadius: SIZES.radius * 0.5,
            borderColor: COLORS.primary,
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            ...styles.shadow,
          }}
        >
          <Text
            text80M
            color={COLORS.danger}
            style={{
              textDecorationLine: 'line-through',
              textDecorationStyle: 'solid',
              marginRight: 5,
              color: COLORS.danger,
            }}
          >
            {discount.food.price.value}€
          </Text>
          <Text text65M color={COLORS.white}>
            {discount.priceWithDiscount}€
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            height: 30,
            width: SIZES.width * 0.45,
            backgroundColor: colorJourRestant (),
            borderTopLeftRadius: SIZES.radius * 0.2,
            borderBottomRightRadius: SIZES.radius * 0.5,
            alignItems: 'center',
            justifyContent: 'center',
            ...styles.shadow,
          }}
        >
          <Text text70M color={COLORS.white}>
            {discount.timeRemaining.dayDuration}{' '}
            {discount.timeRemaining.dayDuration > 1
              ? 'heures restantes'
              : 'heure restante'}
          </Text>
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            height: 35,
            width: SIZES.width * 0.35,
            backgroundColor: COLORS.white,
            borderBottomRightRadius: SIZES.radius * 0.2,
            borderTopLeftRadius: SIZES.radius * 0.5,
            borderColor: COLORS.primary,
            borderWidth: 2,
            alignItems: 'center',
            justifyContent: 'center',
            ...styles.shadow,
          }}
        >
          <Text text70H>20 - 30 min</Text>
        </View>
      </View>

      {/* Restaurant Info */}
      <Text text70M>{discount.food.name}</Text>

      <View
        row
        style={{
          marginTop: SIZES.padding * 0.2,
          alignItems: 'center',
        }}
      >
        {/* Rating */}
        <Image
          source={icons.star}
          style={{
            height: 14,
            width: 14,
            tintColor: COLORS.primary,
            marginRight: 5,
          }}
        />
        <Text text85M color={COLORS.primary}>
          {discount.food.franchise.rating.label}
        </Text>
        <Text text85M>
          {' '}
          -{' '}
        </Text>
        <Text text85M>
          {discount.food.franchise.category.name}
        </Text>
        {/* Categories */}
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
          }}
        />
      </View>
      <View>
        <Text text85M>
          {ingredientLabel ()}
        </Text>
      </View>
    </Card>
  );
};

const stylesHere = StyleSheet.create ({
  profileImgContainer: {
    marginRight: 8,
    height: 60,
    width: 60,
  },
  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
});
