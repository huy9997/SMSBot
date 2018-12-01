import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import EventDetailMessage from "./EventDetailMessage";

class EventDetailMessagesList extends Component {
  render() {
    return (
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={styles.scrollViewInnerStyle}
      >
        <EventDetailMessage />
        <EventDetailMessage />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%"
  },
  scrollViewInnerStyle: {
    alignItems: "center"
  }
});

export default EventDetailMessagesList;
