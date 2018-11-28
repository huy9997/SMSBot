import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { createAppContainer } from "react-navigation";

import IntroStack from "./navigation/IntroStack";
import StartScreen from "./screens/Start";
import CreateEvent from "./screens/CreateEvent";
import ContactList from "./components/ContactList";

const AppContainer = createAppContainer(IntroStack);

class App extends React.Component {
  render() {
    return (
      // <View style={styles.mainContainer}>
      //   {/* <CreateEvent /> */}
      //   {/* <StartScreen /> */}
      // </View>
      // <View style={styles.mainContainer}>
      <AppContainer />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});

export default App;
