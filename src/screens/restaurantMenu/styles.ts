import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";
import { colors } from "../../theme";

interface Style {
  container: ViewStyle;
  modalToggle: ViewStyle;
  modalClose: ViewStyle;
  modalContent: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {

  },
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  modalClose: {
    marginBottom: 0,
    marginRight: 20,
    alignItems: 'flex-end',
    borderWidth: 0,
    borderRadius: 10
  },
  modalContent: {
    flex: 1,
    marginTop:30
  }
});
