import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
//import Modal from "react-native-modal";
import { icons, SIZES, COLORS, FONTS } from "../../constants";
import { reductionDATA } from "../../data/reductionDATA";
import { ReductionComponent } from "../../components/Reduction";

const initialCurrentLocation = {
  streetName: "Zygof",
  gps: {
    longitude: -0.5734212589261247,
    latitude: 44.84356383042417,
  },
};

export default function Home(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [reductions, setReductions] = useState([]);
  const [isLoading, setLoading] = useState(true);
  //const [dataBackup, setDataBackup] = useState([]);
  const [currentLocation, setCurrentLocation] = React.useState({});

  useEffect(() => {
    (async function getListReduction() {
      //let listReduction = await reductionMethod.getAll();
      let listReduction = reductionDATA;
      setReductions(listReduction);
      //setDataBackup(listReduction);
      setCurrentLocation(initialCurrentLocation);
    })().finally(() => setLoading(false));
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function renderFilters() {
    return (
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={isModalVisible}
          coverScreen={false}
          onSwipeComplete={() => toggleModal}
          onSwipeMove={(pourcentage) => {
            pourcentage < 0.5002669595572035 ? toggleModal : null;
          }}
          swipeDirection="down"
        >
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }

  const renderHeader = () => {
    return (
      <View style={{ padding: SIZES.padding }}>
        <View
          style={{ flexDirection: "row", paddingRight: SIZES.padding * 1.5 }}
        >
          <SearchBar
            placeholder="Rechercher..."
            onChangeText={(text) => console.log(text)}
          />
          <TouchableOpacity
            style={{ justifyContent: "center", padding: SIZES.padding }}
            /*onPress={toggleModal}*/
          >
            <Image
              source={icons.filters}
              style={{
                width: SIZES.padding * 3,
                height: SIZES.padding * 3,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderListReduction = () => {
    return (
      <View
        style={{
          flex: 1,
          //justifyContent: 'center',
        }}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={{ paddingBottom: 1 }}
            data={reductions}
            renderItem={(reduction) => (
              <ReductionComponent
                {...props}
                reductionItem={reduction}
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
      {renderListReduction()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
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
