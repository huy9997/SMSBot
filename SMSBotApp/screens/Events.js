import React from "react";

import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity
} from "react-native";

import EventsList from "../components/EventList";

class Events extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <EventsList />
        <TouchableOpacity style={styles.buttonContainer}>
          <Image
            style={{ height: 25, width: 25 }}
            source={require("../assets/icon.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "black"
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "red",
    position: "absolute",
    bottom: 25,
    right: 25
  }
});

export default Events;
