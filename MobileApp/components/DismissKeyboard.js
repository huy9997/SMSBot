import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet
} from "react-native";

const DismissKeyboard = ({ children }) => {
  return (
    <TouchableWithoutFeedback
      style={styles.mainContainer}
      onPress={() => Keyboard.dismiss()}
      // onPress={() => console.log("pressed")}
    >
      {children}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});

export default DismissKeyboard;
