import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { SCREENS } from "@main-constants";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import RNTextInput from "@freakycoder/react-native-text-input";
/**
 * ? Local Imports
 */
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

interface IProps {
  navigation: any;
}

interface IState {}

const iconValue = {
  prenom: "",
  nom: "",
  telephone: "",
  adresseEmail: "",
  password: "",
};

const user = {
  prenom: "Nicolas MARRY",
  nom: "",
  telephone: "",
  adresseEmail: "",
  password: "",
  avatar:
    "https://gravatar.com/avatar/88fc88e475aff3691442cbdaf64dd38d?s=400&d=robohash&r=x",
  screen: SCREENS.PROFIL,
};

export default class ProfilScreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <SafeAreaView style={{alignItems:'center'}}>
          <Avatar source={{ uri: user.avatar }}/>
        </SafeAreaView>

        <View
          style={{
            borderBottomColor: "#7349BD",
            borderBottomWidth: 2,
            flex: 1,
            marginBottom: 15,
          }}
        />

        <View style={{ alignItems: "center" }}>
          <Input
            placeholder="Prénom"
            leftIcon={{ type: "font-awesome", name: "comment" }}
            value="Nicolas"
            clearButtonMode="while-editing"
            label="Prénom"
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Input
            placeholder="Nom"
            leftIcon={{ type: "font-awesome", name: "comment" }}
            value="MARRY"
            clearButtonMode="while-editing"
            label="Nom"
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Input
            placeholder="Numéro de téléphone"
            leftIcon={{ type: "font-awesome", name: "comment" }}
            value="+262 692 40 00 66"
            clearButtonMode="while-editing"
            label="Numéro de téléphone"
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Input
            placeholder="Email"
            leftIcon={{ type: "font-awesome", name: "comment" }}
            value="n.marry90@gmail.com"
            clearButtonMode="while-editing"
            label="Adresse email"
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Input
            placeholder="Mot de passe"
            leftIcon={{ type: "font-awesome", name: "comment" }}
            value="*************"
            clearButtonMode="while-editing"
            label="Mot de passe"
          />
        </View>

        <TouchableOpacity style={{ alignItems: "center" }}>
          <View style={{ backgroundColor: "#7349BD", padding:14, borderRadius:8 }}>
            <Text style={{color:"white", fontWeight:"bold", fontSize:18}}>Enregistrer</Text>


          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
