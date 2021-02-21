import React, { useState, useEffect } from "react";
import { Image, StyleSheet, SafeAreaView } from "react-native";
import { Colors, View, Text, Avatar } from "react-native-ui-lib";
import { images, FONTS, SIZES, COLORS, icons } from "../../constants";
import RNTextInput from "@freakycoder/react-native-text-input";
import { GooglePlayButton } from "@freakycoder/react-native-button";

const user = {
  prenom: "Nicolas",
  nom: "MARRY",
  telephone: "0692400066",
  adresseEmail: "n.marry90@gmail.com",
  password: "123456789",
  avatar: images.avatar_4,
  screen: "SCREENS.PROFIL",
};

const Profile = () => {
  const [value, onChangeText] = React.useState("Useless Placeholder");
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <View marginB-10 marginT-50 centerH>
        <Avatar source={user.avatar} />
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
      <RNTextInput
        disableButton
        placeholder="Adresse"
        placeholderTextColor={COLORS.lightGray1}
        textInputStyle={{ color: COLORS.primary }}
        style={{ borderRadius: 0, width: "100%", marginBottom: 50 }}
        onChangeText={(text) => console.log("Text: ", text)}
      />

      <GooglePlayButton
        text="Enregistrer"
        textColor={COLORS.white}
        rippleColor={COLORS.primary}
        backgroundColor={COLORS.primary}
      />
    </SafeAreaView>
  );
};

export default Profile;
