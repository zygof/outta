import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import PropTypes, { InferProps } from "prop-types";

const Mood = (props:any) => {
  const { title, mood } = props;
  const bkgColors = ["#9b59b6", "#e74c3c", "#e67e22", "#f1c40f", "#2ecc71"];
  const heights = ["25%", "33%", "50%", "75%", "100%"];

  return (
    <View style={[styles.mood, { backgroundColor: bkgColors[mood - 1], height: heights[mood - 1] }]}>
      <Text style={styles.moodText}> {title} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mood: {
    width: 80,
    justifyContent: "center",
    flexWrap: "nowrap",
  },
  moodText:{
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold"
  },
})

export default Mood;
