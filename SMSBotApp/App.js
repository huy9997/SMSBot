import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StartScreen from "./screens/StartScreen";
import Button from "./components/Button";

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      <StartScreen />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
