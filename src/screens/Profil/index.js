import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Colors, View, Text, Avatar, Button } from "react-native-ui-lib";
import { images, FONTS, SIZES, COLORS, icons } from "../../constants";
import RNTextInput from "@freakycoder/react-native-text-input";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const user = {
  prenom: "Prénom",
  nom: "NOM",
  telephone: "0202020202",
  adresseEmail: "example@example.com",
  location: "89 Quai des Chartrons, 33300 Bordeaux",
  password: "123456789",
  avatar: images.avatar_4,
  screen: "SCREENS.PROFIL",
};

const Profil = (props) => {
  const { navigation } = props;
  const [value, onChangeText] = React.useState("Useless Placeholder");
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <View style={{position:"absolute", top:50, left: 15}}>
        <MaterialCommunityIcons
          name="chevron-left"
          onPress={() => navigation.goBack()}
          size={30}
          color={COLORS.primary}
        />
      </View>
      <View marginB-30 marginT-30 centerH>
        <Avatar source={user.avatar} size={80} />
      </View>

      <RNTextInput
        disableButton
        placeholder="Prénom"
        value={user.prenom}
        placeholderTextColor={COLORS.lightGray1}
        textInputStyle={{ color: COLORS.primary }}
        style={{ borderRadius: 0, width: "100%", marginBottom: 15 }}
        onChangeText={(text) => console.log("Text: ", text)}
      />
      <RNTextInput
        disableButton
        placeholder="Nom"
        value={user.nom}
        placeholderTextColor={COLORS.lightGray1}
        textInputStyle={{ color: COLORS.primary }}
        style={{ borderRadius: 0, width: "100%", marginBottom: 15 }}
        onChangeText={(text) => console.log("Text: ", text)}
      />
      <RNTextInput
        disableButton
        placeholder="email"
        value={user.adresseEmail}
        value="example@example.com"
        editable={false}
        placeholderTextColor={COLORS.lightGray1}
        textInputStyle={{ color: COLORS.primary }}
        style={{
          borderRadius: 0,
          width: "100%",
          marginBottom: 15,
        }}
        onChangeText={(text) => console.log("Text: ", text)}
      />
      <RNTextInput
        disableButton
        placeholder="Téléphone"
        value={user.telephone}
        placeholderTextColor={COLORS.lightGray1}
        textInputStyle={{ color: COLORS.primary }}
        style={{ borderRadius: 0, width: "100%", marginBottom: 15 }}
        onChangeText={(text) => console.log("Text: ", text)}
      />
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 50,
          marginTop: 10,
        }}
      >
        <MaterialCommunityIcons
          name="map-marker"
          color={COLORS.primary}
          size={30}
        />
        <Text marginL-5 text70L color={COLORS.primary}>
          {user.location}
        </Text>
      </TouchableOpacity>
      <Button
        text60M
        label="Enregistrer"
        color="white"
        style={{
          height: 50,
          borderRadius: 5,
          backgroundColor: COLORS.primary,
          width: "90%",
        }}
      />
    </SafeAreaView>
  );
};

export default Profil;
