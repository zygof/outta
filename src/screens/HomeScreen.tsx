import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Platform, FlatList, TouchableHighlight } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { CardList } from 'react-native-card-list';

const cards = [
  {
    id: "0",
    title: "kfc",
    picture: require('../../assets/images/image2.jpg'),
    content: <Text>Starry Night</Text>
  },
  {
    id: "1",
    title: "McDonald",
    picture: require('../../assets/images/image3.jpg'),
    content: <Text>Wheat Field with Cypresses</Text>
  },
  {
    id: "2",
    title: "Subway",
    picture: require('../../assets/images/image4.jpg'),
    content: <Text>Bedroom in Arles</Text>
  }
]

const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
<FlatList
  ItemSeparatorComponent={
    Platform.OS !== 'android' &&
    (({ highlighted }) => (
      <View
        style={[
          style.separator,
          highlighted && { marginLeft: 0 }
        ]}
      />
    ))
  }
  data={[{ title: 'Title Text', key: 'item1' }]}
  renderItem={({ item, index, separators }) => (
    <TouchableHighlight
      key={item.key}
      onPress={() => this._onPress(item)}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}>
      <View style={{ backgroundColor: 'white' }}>
        <Text>{item.title}</Text>
      </View>
    </TouchableHighlight>
  )}
/>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
