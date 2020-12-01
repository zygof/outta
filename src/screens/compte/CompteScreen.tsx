import React, { Component } from "react";
import { View, Text } from "react-native";
import { ListItem, Icon, Avatar } from "react-native-elements";
import { SCREENS } from "@main-constants";
/**
 * ? Local Imports
 */
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

interface IProps {
  navigation: any;
}

interface IState {}

const list = [
  {
    title: "Vos favoris",
    icon: "av-timer",
    screen: SCREENS.FAVORIS,
  },
  {
    title: "Aide",
    icon: "flight-takeoff",
    screen: SCREENS.AIDE,
  },
  {
    title: "A propos",
    icon: "flight-takeoff",
    screen: SCREENS.A_PROPOS,
  },
];

const profil = {
  name: "Nicolas MARRY",
  avatar_url:
    "https://gravatar.com/avatar/88fc88e475aff3691442cbdaf64dd38d?s=400&d=robohash&r=x",
  screen: SCREENS.PROFIL,
};

export default class CompteScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <ListItem
          key={0}
          bottomDivider
          onPress={(props) => this.props.navigation.navigate(profil.screen)}
        >
          <Avatar source={{ uri: profil.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title
              style={{ fontSize: 20, fontWeight: "bold", marginBottom: 2 }}
            >
              {profil.name}
            </ListItem.Title>
            <ListItem.Subtitle style={{ color: "#7349BD", marginBottom: 2 }}>
              Voir mon profil
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>

        {list.map((item, i) => (
          <ListItem
            key={i}
            topDivider
            containerStyle={{
              backgroundColor: "#fdfdfd",
            }}
            onPress={(props) => this.props.navigation.navigate(item.screen)}
          >
            <Icon name={item.icon} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
      </SafeAreaView>
    );
  }
}
