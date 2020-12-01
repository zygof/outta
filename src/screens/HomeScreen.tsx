import React, { Component } from "react";
import { View, StatusBar, Text, FlatList, Platform, UIManager } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LineChart } from "react-native-svg-charts";
import GradientCard from "react-native-gradient-card-view";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
/**
 * ? Local Imports
 */
import SearchBar from "react-native-dynamic-search-bar";
import styles, { centerSubtitleStyle } from "../utils/style";
// Static Data
import { staticData } from "../utils/data/staticData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CircularCard } from "react-native-circular-card-view";

interface Props {}

const HomeScreen = ({ navigation }) => {

  const [query, setQuery] = React.useState("");
  const [dataBackup, setDataBackup] = React.useState(staticData);
  const [dataSource, setDataSource] = React.useState(staticData);
  const [isLoading, setIsLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [spinnerVisibility, setSpinnerVisibility] = React.useState(false);

  if (Platform.OS === "android") {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const filterList = (text: string) => {
    var newData = dataBackup;
    newData = dataBackup.filter((item: any) => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setQuery(text);
    setDataSource(newData);
  };

  const renderRightComponent = (item: any) => (
    <View>
      <CircularCard />
    </View>
  );

  const renderItem = (item: any) => {
    return (

      
      <GradientCard
        key={item.name}
        title={item.name}
        style={styles.cardStyle}
        imageSource={item.image}
        centerTitle={item.value}
        subtitle={item.shortName}
        width={ScreenWidth * 0.9}
        centerSubtitle={item.change}
        shadowStyle={styles.cardShadowStyle}
        centerSubtitleStyle={centerSubtitleStyle(item)}
        rightComponent={renderRightComponent(item)}
      />
      
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.container}>
        <SearchBar
          darkMode
          placeholder="Search"
          spinnerVisibility={spinnerVisibility}
          style={{ backgroundColor: "#353d5e"}}
          onChangeText={(text) => {
             (text.length === 0) ? setSpinnerVisibility(false) : setSpinnerVisibility(true);
            filterList(text);
          }}
          onClearPress={() => {
            filterList("");
          }}
        />
        <View style={styles.flatListStyle}>
          <FlatList
            data={dataSource}
            renderItem={({ item }) => renderItem(item)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
