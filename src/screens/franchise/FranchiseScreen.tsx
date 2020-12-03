import React, { Component, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { ListItem, Icon, Avatar } from "react-native-elements";
import { SCREENS } from "@main-constants";
import { MaterialIcons } from "@expo/vector-icons";
/**
 * ? Local Imports
 */
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { franchiseDATA } from "../../data/franchiseDATA";
import { ScrollView } from "react-native-gesture-handler";
import { Franchise } from '../../models'
import { franchiseMethod } from '../../redux/franchise/actions'
import ReviewFormFranchise from "../../components/ReviewFormFranchise";

interface Props {
  navigation: any;
}

const FranchiseScreen = (props: Props) => {

  const { navigation } = props;

  const [isLoading, setLoading] = useState<boolean>(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [dataFranchises, setDataFranchises] = useState<Franchise[]>([]);

  useEffect(() => {
    (async function getListFranchise() {
      setDataFranchises(await franchiseMethod.getByUID("n.marry90@gmail.com"));
    })().finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
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
              <TouchableOpacity onPress={() => setModalOpen(true)}>
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


            <Modal visible={modalOpen} animationType='slide'>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                  <View style={{ marginTop: 50, flexDirection: "row" }}>
                    <Text style={{ marginLeft: 20, fontSize: 18, flex: 1, alignSelf: "flex-start", justifyContent: "center", fontFamily: "suezone-regular" }}>Créer une franchise</Text>
                    <MaterialIcons
                      name='close'
                      size={24}
                      color="#7349BD"
                      style={{ alignItems: "flex-end", marginRight: 20 }}
                      onPress={() => setModalOpen(false)}
                    />
                  </View>


                  <ReviewFormFranchise {...props} />
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
        </ListItem.Content>
      </ListItem>

      { dataFranchises.map((franchise, i) => (
        <ListItem
          key={i}
          topDivider
          containerStyle={{
            backgroundColor: "#fdfdfd",
          }}
          onPress={() =>
            navigation.navigate(SCREENS.RESTAURANT_MENU, { franchise: franchise })
          }
        >
          <ListItem.Content style={{ marginLeft: 10 }}>
            <ListItem.Title style={{ fontWeight: "500" }}>
              {franchise.libelle}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ScrollView>
  );

}

export default FranchiseScreen;