import { Platform } from "react-native";

export const centerSubtitleStyle = (item) => ({
  fontSize: 12,
  marginLeft: 8,
  textAlign: "center",
  color: item.strokeColor,
});

export default {
  safeAreaViewStyle: {
    flex: 1,
  },
  flatListStyle: {
    marginTop: 12,
  },
  cardShadowStyle: {
    ...Platform.select({
      ios: {
        shadowRadius: 3,
        shadowOpacity: 0.4,
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 3,
        },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  container: {
    ...Platform.select({
      android: {
        top: 24,
      },
    }),
    backgroundColor: "#21283d",
  },
  welcome: {
    margin: 10,
    fontSize: 20,
    textAlign: "center",
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  chartStyle: {
    height: 100,
    width: 100,
  },
  chartContentInset: {
    top: 30,
    bottom: 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  cardStyle: {
    borderRadius: 10,
    borderColor: '#fdfdfd'
  }
};
