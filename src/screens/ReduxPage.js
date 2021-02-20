import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addHandler, subtractHandler } from "../redux/counter/actions";

const ReduxPage = props => {
  console.log('props', props);
  const { counter, addHandler, subtractHandler } = props;

  const _addHandler = () => {
    addHandler();
  }
  const _subtractHandler = () => {
    subtractHandler();
  }

  return (
    <View style={styles.container}>
      <Button title="ajouter" onPress={() => _addHandler()} />
      <Text>{counter.counter}</Text>
      <Button title="enlever" onPress={() => _subtractHandler()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addHandler,
      subtractHandler
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage);