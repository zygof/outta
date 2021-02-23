import React, { Component, useEffect, useState } from "react";
import {
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { View, Text } from "react-native-ui-lib";
import { ListItem, Icon, Avatar } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
/**
 * ? Local Imports
 */
import { franchiseDATA } from "../../..//data/franchiseDATA";
import {
  COLORS,
  FONTS,
  icons,
  SIZES,
  GOOGLE_API_KEY,
} from "../../../constants";

//import { franchiseMethod } from "../../redux/franchise/actions";

const ListFranchise = (props) => {
  const { navigation } = props;
  const [franchises, setFranchises] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    (async function getListFranchise() {
      //setfranchises(await franchiseMethod.getByUID("n.marry90@gmail.com"));
      setFranchises(franchiseDATA);
    })().finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView>
      <View
        row
        center
        padding-15
        style={{ borderBottomColor: COLORS.primary, borderBottomWidth: 0.2 }}
      >
        <Text text60H color={COLORS.primary}>
          Mes franchises
        </Text>
        <View flex style={{ alignItems: "flex-end" }}>
          <MaterialCommunityIcons
            name="plus"
            onPress={() => setModalOpen(true)}
            size={30}
            color={COLORS.primary}
          />
        </View>
      </View>

      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.modalContent}>
            <View row center padding-15>
              <Text
                text60H
                color={COLORS.primary}
                style={{
                  flex: 1,
                }}
              >
                Ajouter une franchise
              </Text>
              <MaterialCommunityIcons
                name="close"
                size={30}
                color={COLORS.primary}
                onPress={() => setModalOpen(false)}
              />
            </View>

            <View flex padding-15>
              <Text text80L>Je suis dans le modal "Ajouer franchise"</Text>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal>

      <ScrollView style={{ height: "100%" }}>
        {franchises.map((franchise, i) => (
          <ListItem
            key={i}
            topDivider={i != 0 ? true : false}
            containerStyle={{
              backgroundColor: COLORS.white,
            }}
            onPress={() =>
              navigation.navigate("Franchise", {
                franchise: franchise,
              })
            }
          >
            <ListItem.Content style={{ marginLeft: 10 }}>
              <ListItem.Title style={{ fontWeight: "500" }}>
                {franchise.nom}
              </ListItem.Title>
            </ListItem.Content>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={COLORS.primary}
            />
          </ListItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-end",
  },
  modalClose: {
    marginBottom: 0,
    marginRight: 20,
    alignItems: "flex-end",
    borderWidth: 0,
    borderRadius: 10,
  },
  modalContent: {
    flex: 1,
    marginTop: 30,
  },
});
export default ListFranchise;
