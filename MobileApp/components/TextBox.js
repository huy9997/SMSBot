import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextBox = props => {
  const { text } = props;

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20
  }
});

export default TextBox;
