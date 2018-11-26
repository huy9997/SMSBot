import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import StartScreen from "./screens/Start";
import CreateScreen from "./screens/CreateEvent";
import ContactList from "./components/ContactList";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* <StartScreen />
      <CreateScreen /> */}
        <ContactList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});
