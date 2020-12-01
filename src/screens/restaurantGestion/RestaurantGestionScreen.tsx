import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ListItem, Icon, Avatar } from "react-native-elements";
import { SCREENS } from "@main-constants";
/**
 * ? Local Imports
 */
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { restaurantDATA } from "../../data/restaurantDATA";

interface IProps {
  navigation: any;
}

interface IState {}

export default class RestaurantGestionScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={{ marginTop: 30 }}>
        <ListItem key={0} bottomDivider>
          <ListItem.Content>
            <ListItem.Title
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 2 }}
            ></ListItem.Title>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <ListItem.Subtitle
                style={{
                  color: "#7349BD",
                  marginBottom: 2,
                  fontWeight: "bold",
                  fontSize: 20,
                  marginLeft: 10,
                }}
              >
                Mes restaurants
              </ListItem.Subtitle>
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#7349BD",
                      fontWeight: "bold",
                      fontSize: 30,
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ListItem.Content>
        </ListItem>

        {restaurantDATA.map((item, i) => (
          <ListItem
            key={i}
            topDivider
            containerStyle={{
              backgroundColor: "#fdfdfd",
            }}
            onPress={(props) => this.props.navigation.navigate(SCREENS.RESTAURANT_MENU)}
          >
            <ListItem.Content style={{ marginLeft: 10 }}>
              <View style={{flexDirection:"column"}}>
                <ListItem.Title style={{fontWeight:"bold"}}>
                  {item.franchise.nom}
                </ListItem.Title>
                <ListItem.Subtitle style={{marginTop:3, color:"gray"}}>
                {item.codePostal} - {item.rue}
                </ListItem.Subtitle>
              </View>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </SafeAreaView>
    );
  }
}
