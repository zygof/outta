import React, {useState, useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Colors, Card, View, Button, Text} from 'react-native-ui-lib';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {images, FONTS, SIZES, COLORS, icons} from '../../constants';
import CarouselCards from '../../components/Carousel';
import {reductionDATA} from '../../data/reductionDATA';
import {ReductionComponent} from '../../components/Reduction';
import {getRestaurant} from '../../redux/restaurant/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {RestaurantModel, DiscountModel} from '../../models';

const Restaurant = props => {
  const {route, restaurantReducer, getRestaurant, userReducer} = props;
  const {restaurantId, currentLocation} = route.params;
  const [restaurant, setRestaurant] = useState (RestaurantModel);
  const [discounts, setDiscounts] = useState ([DiscountModel]);
  const [isLoading, setLoading] = useState (true);

  useEffect (() => {
    (async function getResto () {
      await getRestaurant (restaurantId, userReducer.userToken);
    }) ().finally (() => {
      setLoading (false);
      setRestaurant (restaurantReducer.restaurant);
    });
    (async function getListDiscount () {
      //let listDiscount = await discountMethod.getAll();
      let listDiscount = reductionDATA;
      setDiscounts (listDiscount);
    }) ();
  }, []);

  const renderListDiscount = () => {
    /*return (
      <View>
        {isLoading
          ? <ActivityIndicator />
          : <FlatList
              data={discounts}
              contentContainerStyle={{paddingBottom: SIZES.width * 0.4}}
              renderItem={discount => (
                <ReductionComponent
                  {...props}
                  discountItem={discount}
                  currentLocation={'currentLocation'}
                />
              )}
            />}
      </View>
    );*/
  };

  return (
    <View flex>
      <StatusBar style="light" />
      <ImageHeaderScrollView
        maxHeight={130}
        minHeight={80}
        fadeOutForeground
        headerImage={{uri: restaurant.images[0].uri}}
        overScrollMode="never"
        minOverlayOpacity={0.4}
        overlayColor={Colors.primaryColor}
        maxOverlayOpacity={0.9}
        foregroundParallaxRatio={1}
      >
        <TriggeringView>
          <View padding-15>
            <Text text50M marginB-15>
              {restaurant.franchise.name} - {restaurant.location.city}
            </Text>
            <View flex />
            <Text marginB-15 text80>
              {restaurant.franchise.description}
            </Text>
            <View row centerV marginB-15>
              <MaterialCommunityIcons
                name="star"
                size={20}
                color={COLORS.primary}
              />
              <Text text70M color={Colors.primaryColor}>
                {restaurant.rating.label}
              </Text>
            </View>
            <View row centerV marginB-15>
              <MaterialCommunityIcons
                name="food-fork-drink"
                size={20}
                color={COLORS.success}
              />
              <Text text70M marginL-2 color={COLORS.success}>
                10 réductions en cours
              </Text>
            </View>
            <Button backgroundColor={COLORS.primary} borderRadius={5}>
              <View row center>
                <MaterialCommunityIcons
                  name="phone"
                  size={20}
                  color={COLORS.white}
                  style={{marginRight: 5}}
                />
                <Text white text70M>Réserver au {restaurant.phone}</Text>
              </View>
            </Button>
          </View>
          <View
            style={{
              borderBottomColor: Colors.primaryColor,
              borderBottomWidth: 0.6,
            }}
          />
          <View padding-15>
            <Text text65M marginB-15>Informations de l'étabilssement</Text>
            <View row marginB-15>
              <MaterialCommunityIcons
                name="map"
                size={20}
                style={{marginTop: 5}}
                color={COLORS.primary}
              />
              <TouchableOpacity onPress={() => console.log ('map press')}>
                <Text marginL-5 text70 color={COLORS.primary}>
                  {restaurant.location.street}
                  {' '}
                  {', '}
                  {restaurant.location.zipCode}
                  {' - '}
                  {restaurant.location.city}
                  {' '}
                  {restaurant.location.country}
                </Text>
              </TouchableOpacity>

            </View>

            <View row centerV marginB-15>
              <MaterialCommunityIcons
                name="timer"
                size={20}
                color={COLORS.primary}
              />

              <Text marginL-5 text75>
                20- 30 min
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: Colors.primaryColor,
              borderBottomWidth: 0.6,
            }}
          />
          <View padding-15>
            <Text text65M style={{paddingBottom: 15}}>
              Photos de l'étabilssement
            </Text>
            <CarouselCards images={restaurant.images} />
          </View>

          <View
            style={{
              borderBottomColor: Colors.primaryColor,
              borderBottomWidth: 0.8,
            }}
          />
          <View padding-15>
            <Text text65M>Liste des réductions disponibles</Text>
          </View>
          {renderListDiscount ()}
        </TriggeringView>
      </ImageHeaderScrollView>
    </View>
  );
};

const styles = StyleSheet.create ({
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
});

const mapStateToProps = state => ({
  userReducer: state.userReducer,
  restaurantReducer: state.restaurantReducer,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators (
    {
      getRestaurant: (restaurantId, userToken) =>
        dispatch (getRestaurant (restaurantId, userToken)),
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToProps) (Restaurant);
