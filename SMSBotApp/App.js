import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import StartScreen from "./screens/Start";
import CreateEvent from "./screens/CreateEvent";
import ContactList from "./components/ContactList";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <CreateEvent />
        {/* <StartScreen /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});
