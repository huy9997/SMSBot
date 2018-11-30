import React from "react";

import { StyleSheet, View } from "react-native";

import EventsList from "../components/EventList";
import IconButton from "../components/IconButton";

class Events extends React.Component {
  static navigationOptions = {
    title: "Events"
  };

  createEvent = () => {
    console.log("Create event");
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        {/* scrollview of events */}
        <EventsList />
        {/* scrollview of events */}

        <IconButton
          source={require("../assets/icon.png")}
          onPress={() => this.createEvent()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black"
  }
});

export default Events;
