import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { View, Button, Text } from "react-native-ui-lib";
import AppSearchBar from "../../components/SearchBar";
//import Modal from "react-native-modal";
import { icons, SIZES, COLORS, FONTS } from "../../constants";
import { restaurantDATA } from "../../data/restaurantDATA";
import initialCurrentLocation from "../../data/locationDATA";
import { RestaurantComponent } from "../../components/Restaurant";
import { ListReduction } from "../ListReduction";

const ListRestaurant = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(true);
  //const [dataBackup, setDataBackup] = useState([]);
  const [currentLocation, setCurrentLocation] = React.useState({});

  useEffect(() => {
    (async function getListRestaurant() {
      //let listRestaurant = await RestaurantMethod.getAll();
      let listRestaurant = restaurantDATA;
      setRestaurants(listRestaurant);
      //setDataBackup(listRestaurant);
      setCurrentLocation(initialCurrentLocation);
    })().finally(() => setLoading(false));
  }, []);

  const renderHeader = () => {
    return <AppSearchBar {...props} />;
  };

  const renderListRestaurant = () => {
    return (
      <View
        style={{
          maxHeight: SIZES.width * 1.67,
        }}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={{ paddingBottom: 1 }}
            data={restaurants}
            renderItem={(restaurant) => (
              <RestaurantComponent
                {...props}
                restaurantItem={restaurant}
                currentLocation={currentLocation}
              />
            )}
          />
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderListRestaurant()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default ListRestaurant;
