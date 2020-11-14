import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { addMood } from "../../redux/moods/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Mood from '../../components/Mood';

const List = (props:any) => {
    const { addMood, moods, user } = props;
    const [displayAdd, setDisplayAdd] = useState(false);

    const _addMood = (item:any) => {
      addMood(item);
    }

    const smileys = [
        {
            id: 1,
            mood: 5,
            title: "Parfait",
            label: ":D"
        },
        {
            id: 2,
            mood: 3,
            title: "Normal",
            label: ":|"
        },
        {
            id: 3,
            mood: 1,
            title: "Mauvais",
            label: ":("
        },
        {
            id: 4,
            mood: 4,
            title: "Bon",
            label: ":)"
        },
        {
            id: 5,
            mood: 2,
            title: "Passable",
            label: ":/"
        },
    ];

    if (!user.loggedIn) {
      return (
        <View style={styles.wrapper}>
          <Text>Vous devez être connecté pour utiliser cette fonctionnalité.</Text>
        </View>
      );
    }

    return (
        <View style={styles.wrapper}>
          <ScrollView
            horizontal={true}
            style={styles.moods}
            contentContainerStyle={{
              alignItems: "flex-end",
            }}
          >
            {moods.map((item:any) => (
                <Mood
                    mood={item.mood}
                    title={item.title}
                    key={item.id.toString()}
                />
            ))}
        </ScrollView>

        <View style={styles.buttonWrapper}>
          {displayAdd && (
              <View>
                  {smileys.map((item) => (
                      <View style={styles.buttonOverlay}>
                          <Button
                              style={styles.button}
                              title={item.label}
                              onPress={() => _addMood(item)}
                          />
                      </View>
                  ))}
              </View>
          )}

          <View style={styles.buttonOverlay}>
            <Button
                title={ displayAdd ? "-" : "+" }
                onPress={() => setDisplayAdd(!displayAdd)}
            />
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  moods: {
    flexDirection: "row",
    textAlign: "center",
    height: "100%",
  },
  smileys: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 50,
    right: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonOverlay: {
    backgroundColor: "white",
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginVertical: 10,
  }
});

const mapStateToProps = (state:any) => ({
  moods: state.moods.moods,
  user: state.user,
});

const mapDispatchToProps = (dispatch:any) =>
  bindActionCreators(
    {
      addMood,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(List);
