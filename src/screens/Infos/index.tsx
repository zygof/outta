import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface InfoProps{

}

const Infos:React.FC<InfoProps> = () => {
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

export default Infos;