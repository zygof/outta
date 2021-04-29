import React from 'react';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {View, Text, Card, Button} from 'react-native-ui-lib';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import AppSearchBar from '../../components/SearchBar';
import {Foundation, MaterialCommunityIcons} from '@expo/vector-icons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY} from '../../constants';

import {restaurantDATA} from '../../data/restaurantDATA';
import {
  initialCurrentLocation,
  destinationLocation,
} from '../../data/locationDATA';

export const MapRestaurants = props => {
  const mapView = React.useRef ();

  const [restaurant, setRestaurant] = React.useState (restaurantDATA[0]);
  const [streetName, setStreetName] = React.useState ('');
  const [fromLocation, setFromLocation] = React.useState (null);
  const [toLocation, setToLocation] = React.useState (null);
  const [region, setRegion] = React.useState (null);
  const [currentLocation, setCurrentLocation] = React.useState (
    initialCurrentLocation
  );
  const [duration, setDuration] = React.useState (0);
  const [isReady, setIsReady] = React.useState (false);
  const [angle, setAngle] = React.useState (0);

  React.useEffect (() => {
    //let { currentLocation } = route.params;

    let fromLoc = currentLocation.gps;
    let toLoc = destinationLocation.gps;
    //let toLoc = restaurant.location;
    let street = currentLocation.streetName;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs (fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs (fromLoc.longitude - toLoc.longitude) * 2,
    };

    setRestaurant (restaurant);
    setStreetName (street);
    setFromLocation (fromLoc);
    setToLocation (toLoc);
    setRegion (mapRegion);
  }, []);

  function calculateAngle (coordinates) {
    let startLat = coordinates[0]['latitude'];
    let startLng = coordinates[0]['longitude'];
    let endLat = coordinates[1]['latitude'];
    let endLng = coordinates[1]['longitude'];
    let dx = endLat - startLat;
    let dy = endLng - startLng;

    return Math.atan2 (dy, dx) * 180 / Math.PI;
  }

  function zoomIn () {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    };

    setRegion (newRegion);
    mapView.current.animateToRegion (newRegion, 200);
  }

  function zoomOut () {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };

    setRegion (newRegion);
    mapView.current.animateToRegion (newRegion, 200);
  }

  function renderMap () {
    const destinationMarker = () => (
      <Marker coordinate={toLocation}>
        <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
          }}
        >
          <View
            style={{
              height: 24,
              width: 24,
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.white,
            }}
          >
            <MaterialCommunityIcons
              name="map-marker"
              size={24}
              color={COLORS.primary}
            />
          </View>
        </View>
      </Marker>
    );

    const currentLocationIcon = () => (
      <Marker
        coordinate={fromLocation}
        anchor={{x: 0.5, y: 0.5}}
        flat={true}
        rotation={angle}
      >
        <MaterialCommunityIcons
          name="navigation"
          size={30}
          color={COLORS.primary}
        />
      </Marker>
    );

    return (
      <View style={{flex: 1}}>
        <MapView
          ref={mapView}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{flex: 1}}
        >
          <MapViewDirections
            origin={fromLocation}
            destination={toLocation}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor={COLORS.primary}
            optimizeWaypoints={true}
            onReady={result => {
              setDuration (result.duration);

              if (!isReady) {
                // Fit route into maps
                mapView.current.fitToCoordinates (result.coordinates, {
                  edgePadding: {
                    right: SIZES.width / 20,
                    bottom: SIZES.height / 4,
                    left: SIZES.width / 20,
                    top: SIZES.height / 8,
                  },
                });

                // Reposition the car
                let nextLoc = {
                  latitude: result.coordinates[0]['latitude'],
                  longitude: result.coordinates[0]['longitude'],
                };

                if (result.coordinates.length >= 2) {
                  let angle = calculateAngle (result.coordinates);
                  setAngle (angle);
                }

                setFromLocation (nextLoc);
                setIsReady (true);
              }
            }}
          />
          {destinationMarker ()}
          {currentLocationIcon ()}
        </MapView>
      </View>
    );
  }

  function renderDestinationHeader () {
    return (
      <View
        style={{
          position: 'absolute',
          top: 44,
          left: 0,
          right: 0,
        }}
      >
        <AppSearchBar {...props} />
      </View>
    );
  }

  function renderButtons () {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: SIZES.width * 0.5,
          right: SIZES.padding * 2,
          width: 60,
          height: 130,
          justifyContent: 'space-between',
        }}
      >
        {/* Zoom In */}
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => zoomIn ()}
        >
          <MaterialCommunityIcons name="plus" size={30} color={COLORS.white} />
        </TouchableOpacity>

        {/* Zoom Out */}
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => zoomOut ()}
        >
          <MaterialCommunityIcons name="minus" size={30} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar style="dark" />
      {renderMap ()}
      {renderDestinationHeader ()}
      {renderButtons ()}
    </View>
  );
};

const mapStateToProps = state => ({
  toggleModal: state.toggleModal,
});

const mapDispatchToProps = dispatch => bindActionCreators ({}, dispatch);

export default connect (mapStateToProps, mapDispatchToProps) (MapRestaurants);

//export default MapRestaurants;
