import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

class Loading extends Component {
  constructor(props) {
    super(props);
    // check for userToken here
  }
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#559bfd"
  }
});

export default Loading;
