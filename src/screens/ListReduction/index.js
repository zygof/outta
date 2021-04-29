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
import initialCurrentLocation from '../../data/locationDATA';
import {ReductionComponent} from '../../components/Reduction';
import {getAllDiscounts} from '../../redux/discount/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export const ListReduction = props => {
  const {discountReducer, userReducer, getAllDiscounts} = props;
  const [discounts, setDiscounts] = useState ([]);
  const [isLoading, setLoading] = useState (true);
  const [currentLocation, setCurrentLocation] = React.useState ({});

  useEffect (() => {
    (async function getListReduction () {
      await getDiscounts ();
      setCurrentLocation (initialCurrentLocation);
    }) ().finally (() => {
      setLoading (false);
      setDiscounts (discountReducer.discounts);
    });
  }, []);

  const getDiscounts = async () => {
    await getAllDiscounts ([], userReducer.userToken);
  };

  const renderHeader = () => {
    return (
      <View>
        <AppSearchBar {...props} />
      </View>
    );
  };

  const renderListReduction = () => {
    return (
      <View>
        {isLoading
          ? <ActivityIndicator />
          : <FlatList
              onMomentumScrollBegin={() => getDiscounts ()}
              data={discounts}
              contentContainerStyle={{paddingBottom: SIZES.width * 0.4}}
              renderItem={discount => (
                <ReductionComponent
                  {...props}
                  discountItem={discount}
                  currentLocation={currentLocation}
                />
              )}
            />}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader ()}
      {renderListReduction ()}
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
  discountReducer: state.discountReducer,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators (
    {
      getAllDiscounts: (filters, userToken) =>
        dispatch (getAllDiscounts (filters, userToken)),
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToProps) (ListReduction);
