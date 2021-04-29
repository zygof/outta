import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {View, Button, Text} from 'react-native-ui-lib';
import AppSearchBar from '../../components/SearchBar';
//import Modal from "react-native-modal";
import {icons, SIZES, COLORS, FONTS} from '../../constants';
import {restaurantDATA} from '../../data/restaurantDATA';
import initialCurrentLocation from '../../data/locationDATA';
import {RestaurantComponent} from '../../components/Restaurant';
import {getAllRestaurants} from '../../redux/restaurant/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const ListRestaurant = props => {
  const {restaurantReducer, userReducer, getAllRestaurants} = props;
  const [isModalVisible, setModalVisible] = useState (false);
  const [restaurants, setRestaurants] = useState ([]);
  const [isLoading, setLoading] = useState (true);
  const [currentLocation, setCurrentLocation] = React.useState ({});

  useEffect (() => {
    (async function defaultValue () {
      setCurrentLocation (initialCurrentLocation);
      await getRestaurants ();
    }) ().finally (() => {
      setLoading (false);
      setRestaurants (restaurantReducer.restaurants);
    });
  }, []);

  const getRestaurants = async () => {
    await getAllRestaurants ([], userReducer.userToken);
  };
  const renderHeader = () => {
    return <AppSearchBar {...props} />;
  };

  const renderListRestaurant = () => {
    return (
      <View>
        {isLoading
          ? <ActivityIndicator />
          : <FlatList
              contentContainerStyle={{paddingBottom: SIZES.width * 0.4}}
              onMomentumScrollBegin={() => getRestaurants ()}
              data={restaurants}
              renderItem={restaurant => (
                <View>
                  <RestaurantComponent
                    {...props}
                    restaurantItem={restaurant}
                    currentLocation={currentLocation}
                  />
                </View>
              )}
            />}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader ()}
      {renderListRestaurant ()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

const mapStateToProps = state => ({
  userReducer: state.userReducer,
  restaurantReducer: state.restaurantReducer,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators (
    {
      getAllRestaurants: (filters, userToken) =>
        dispatch (getAllRestaurants (filters, userToken)),
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToProps) (ListRestaurant);
