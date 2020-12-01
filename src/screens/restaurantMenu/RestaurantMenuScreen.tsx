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
import { ScrollView } from "react-native-gesture-handler";

interface IProps {
  navigation: any;
}

interface IState {}

export default class RestaurantMenuScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 80 }}>
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
                Mc Donald
              </ListItem.Subtitle>
            </View>
          </ListItem.Content>
        </ListItem>

        <ListItem
          key={1}
          topDivider
          bottomDivider
          containerStyle={{
            backgroundColor: "#fdfdfd",
          }}
          onPress={
            (props) => console.log("")
            //this.props.navigation.navigate(SCREENS.RESTAURANT_GESTION)
          }
        >
          <ListItem.Content style={{ marginLeft: 10 }}>
            <ListItem.Title style={{ fontWeight: "500" }}>
              Articles
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <ListItem
          key={2}
          topDivider
          bottomDivider
          containerStyle={{
            backgroundColor: "#fdfdfd",
          }}
          onPress={
            (props) => console.log("ici")
            //this.props.navigation.navigate(SCREENS.RESTAURANT_GESTION)
          }
        >
          <ListItem.Content style={{ marginLeft: 10 }}>
            <ListItem.Title style={{ fontWeight: "500" }}>
              Statistiques
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>

        <View style={{ flexDirection: "row", alignItems: "center", margin: 20, marginBottom:10, marginTop:30}}>
          <ListItem.Subtitle
            style={{
              color: "#7349BD",
              fontWeight: "500",
              fontSize: 18,
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

        {restaurantDATA.map((item, i) => (
          <ListItem
            key={i}
            topDivider
            containerStyle={{
              backgroundColor: "#fdfdfd",
            }}
            onPress={(props) => console.log("")
              //this.props.navigation.navigate(SCREENS.RESTAURANT_GESTION)
            }
          >
            <ListItem.Content style={{ marginLeft: 10 }}>
              <View style={{ flexDirection: "column" }}>
                <ListItem.Title style={{ fontWeight: "500" }}>
                  {item.franchise.nom}
                </ListItem.Title>
                <ListItem.Subtitle style={{ marginTop: 3, color: "gray" }}>
                  {item.codePostal} - {item.rue}
                </ListItem.Subtitle>
              </View>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    );
  }
}
