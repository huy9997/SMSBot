import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Event = props => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 125,
    width: "90%",
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    backgroundColor: "blue"
  }
});

export default Event;
