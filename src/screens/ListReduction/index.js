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
import { reductionDATA } from "../../data/reductionDATA";
import initialCurrentLocation from "../../data/locationDATA";
import { ReductionComponent } from "../../components/Reduction";

export const ListReduction = (props) => {
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

  const renderHeader = () => {
    return (
      <View>
        <AppSearchBar {...props} />
      </View>
    );
  };

  const renderListReduction = () => {
    return (
      <View

      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={reductions}
            contentContainerStyle={{paddingBottom:SIZES.width * 0.4}}
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
};
const mapStateToProps = (state) => ({
  //toggleModal: state.toggleModal,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

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

//export default connect(mapStateToProps, mapDispatchToProps)(ListReduction);
export default ListReduction;
