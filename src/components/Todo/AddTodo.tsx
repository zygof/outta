import { Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";

interface Props{

}

const AddTodo = (props: Props) => {
  const { firebase } = props;
  const [presentToDo, setPresentToDo] = useState("");
  const firestore = useFirestore();
  const uid = firebase;
  //const { uid } = useSelector((state) => state.firebase.auth);
  console.log("uid : " +uid);

  const addNewTodo = (todo : string) => {
    firestore
      .collection("users")
      .doc(uid)
      .collection("todos")
      .add({
        title: todo,
        isDone: false,
      })
      .then((docRef) => {
        docRef.update({
          todoID: docRef.id,
        });
      });

    setPresentToDo("");
  };
  return (
    <View>
      <TextInput
        value={presentToDo}
        onChangeText={(text: string) => setPresentToDo(text)}
      />
      <Button
        title="Press me"
        onPress={() => {
          addNewTodo(presentToDo);
        }}
      />
    </View>
  );
};

export default AddTodo;
