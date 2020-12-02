import firebase from "../../config/firebase"
import { Article } from "../../models"
import articleActions from "./constants";

import store from "@config/store";

const collectionArticle = firebase.firestore().collection("articles");

export const articleMethod = {
  insert: async (article: Article) => {
    //return async function (dispatch: any) {
    //let franchise = await collectionFranchise.where("libelle", "==", article.franchise?.libelle).get();

    await collectionArticle.add(article)
      .then(function (articleRef) {
        console.log("Article ajouter avec succès !", articleRef.id);
        //dispatch({ type: articleActions.INSERT_REDUCTION, isInsert: true });
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
    //}
  },

  getAll: async () => {
    //return async function (dispatch: any) {
    let result: any;
    await collectionArticle.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        result = doc.data();
      });
      console.log("dans actions", " => ", result);

    })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    //}
    return result;
  },

  update: async (article: Article) => {
    return async function (dispatch: any) {
      const docId = article.id.toString;
      collectionArticle.doc(docId).set(article)
        .then(function () {
          console.log("Réduction ajouter avec succès !");
          dispatch({ type: articleActions.INSERT_ARTICLE, isInsert: true });
        })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });
    }
  },

}