import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import StartScreen from "./screens/StartScreen";

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Header style={styles.header} text="SMS Bot" />
      //   <Text style={styles.text}>Hello</Text>
      //   <Footer style={styles.header} title />
      // </View>
      <StartScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flex: 1
  },
  text: {
    flex: 5
  }
});
