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
import { AppSearchBar } from "../../components/SearchBar";
//import Modal from "react-native-modal";
import { icons, SIZES, COLORS, FONTS } from "../../constants";
import { reductionDATA } from "../../data/reductionDATA";
import initialCurrentLocation from "../../data/locationDATA";
import { ReductionComponent } from "../../components/Reduction";

export default function ListReduction(props) {
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
      <View>
        <AppSearchBar />
      </View>
    );
  };

  const renderListReduction = () => {
    return (
      <View
        style={{
          
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
