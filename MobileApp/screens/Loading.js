import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import AsyncStorage from "../functions/asyncStorage";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.checkUserToken();
  }

  checkUserToken = async () => {
    const userToken = await AsyncStorage.getData("userToken");

    // get request to check if user token actually on server

    console.log(`User Token : ${userToken}`);
    this.props.navigation.navigate(
      userToken ? "Application" : "Authentication"
    );
  };

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
