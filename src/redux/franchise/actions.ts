import firebase from "../../config/firebase"
import { Franchise } from "../../models"
import franchiseActions from "./constants";

import store from "@config/store";

const collectionFranchise = firebase.firestore().collection("franchises");

export const franchiseMethod = {
  insert: async (franchise: Franchise) => {
    //return async function (dispatch: any) {
    collectionFranchise.add(franchise)
      .then(function (franchiseRef) {
        console.log("Franchise ajouter avec succès !", franchiseRef.id);
        //dispatch({ type: restaurantActions.INSERT_REDUCTION, isInsert: true });
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

    //}
  },

  getAll: async () => {
    //return async function (dispatch: any) {
    let result: any = [];
    await collectionFranchise.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        result.push(doc.data());
      });
      console.log("getAll", " => ", result);
    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    //}
    return result;
  },

  getByUID: async (uid: string) => {
    //return async function (dispatch: any) {
    let result: any = [];
    await collectionFranchise.where("proprietaire", "==", uid).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        result.push(doc.data());
      });
      console.log("getByUID", " => ", result);
    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    //}
    return result;
  },



  update: async (franchise: Franchise) => {
    return async function (dispatch: any) {
      const docId = franchise.id.toString;
      collectionFranchise.doc(docId).set(franchise)
        .then(function () {
          console.log("Franchise modifier avec succès !");
          dispatch({ type: franchiseActions.INSERT_FRANCHISE, isUpdate: true });
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    }
  },

}