import firebase from "../../config/firebase"
import { Reduction } from "../../models"
import reductionActions from "./constants";

import store from "@config/store";

const collectionReduction = firebase.firestore().collection("reductions");

export const reductionMethod = {
  insert: async (reduction: Reduction) => {
    //return async function (dispatch: any) {
    collectionReduction.add(reduction)
      .then(function (reductionRef) {
        console.log("Réduction ajouter avec succès !", reductionRef.id);
        //dispatch({ type: reductionActions.INSERT_REDUCTION, isInsert: true });
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
    //}
  },

  getAll: async () => {
    //return async function (dispatch: any) {
    let reductions: Array<any> = [];
    await collectionReduction.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        reductions.push(doc.data());
      });
      console.log("dans actions", " => ", reductions);

    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    //}
    return reductions;
  },

  getByFranchiseId: async (franchiseId: string) => {
    //return async function (dispatch: any) {
    let reductions: Array<any> = [];
    console.log('franchiseId', franchiseId)
    await collectionReduction.where("franchise.id", "==", franchiseId).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        reductions.push(doc.data());
      });
      console.log("get reduction by franchise", " => ", reductions);
    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    //}
    return reductions;
  },

  update: async (reduction: Reduction) => {
    return async function (dispatch: any) {
      const docId = reduction.id.toString;
      collectionReduction.doc(docId).set(reduction)
        .then(function () {
          console.log("Réduction ajouter avec succès !");
          dispatch({ type: reductionActions.INSERT_REDUCTION, isInsert: true });
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    }
  },

}