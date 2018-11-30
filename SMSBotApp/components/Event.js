import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Event = props => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <Text style={styles.textStyle}>{props.text}</Text>
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
    backgroundColor: "#0C72FF"
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    width: "90%"
  }
});

export default Event;
