import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ListItem, Icon, Avatar } from "react-native-elements";
import { SCREENS } from "@main-constants";
/**
 * ? Local Imports
 */
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { franchiseDATA } from "../../data/franchiseDATA";

interface IProps {
  navigation: any;
}

interface IState {}

export default class FranchiseScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
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
                Mes franchises
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

        {franchiseDATA.map((item, i) => (
          <ListItem
            key={i}
            topDivider
            containerStyle={{
              backgroundColor: "#fdfdfd",
            }}
            onPress={(props) =>
              this.props.navigation.navigate(SCREENS.RESTAURANT_MENU)
            }
          >
            <ListItem.Content style={{ marginLeft: 10 }}>
              <ListItem.Title style={{ fontWeight: "500" }}>
                {item.nom}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </SafeAreaView>
    );
  }
}
