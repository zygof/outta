import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addMood } from "../../redux/moods/actions";

interface Props{
}

const Exemple = (props:Props) => {
    const { addMood, user } = props;

  return (
    <View style={styles.container}>
      <Text>Infos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const mapStateToProps = (state:any) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch:any) =>
  bindActionCreators(
    {
      addMood,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Exemple);
