import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import StartScreen from "./screens/Start";
import CreateScreen from "./screens/CreateEvent";
import Contact from "./components/Contact";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* <StartScreen />
      <CreateScreen /> */}

        <ScrollView>
          <Contact phoneNumber="(415) 123-1234" name="nick" />
          <Contact phoneNumber="(415) 123-1234" name="nick" />
          <Contact phoneNumber="(415) 123-1234" name="nick" />
          <Contact phoneNumber="(415) 123-1234" name="nick" />
          <Contact phoneNumber="(415) 123-1234" name="nick" />
          <Contact phoneNumber="(415) 123-1234" name="nick" />
          <Contact phoneNumber="(415) 123-1234" name="nick" />
          <Contact phoneNumber="(415) 123-1234" name="nick" />
          <Contact phoneNumber="(415) 123-1234" name="nick" />
          <Contact phoneNumber="(415) 123-1234" name="nick" />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});
