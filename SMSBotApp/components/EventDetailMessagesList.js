import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import EventDetailMessage from "./EventDetailMessage";

class EventDetailMessagesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const responseJson = await response.json();
    this.setState({ messages: responseJson, isLoading: false });
  }

  render() {
    const { messages, isLoading } = this.state;

    return (
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={styles.scrollViewInnerStyle}
      >
        {isLoading ? (
          <EventDetailMessage />
        ) : (
          messages.map(message => {
            return (
              <EventDetailMessage
                key={message.id}
                initials={message.id}
                recentMessage={message.company.catchPhrase}
                status={message.username}
                currentDate="12/01/2018"
              />
            );
          })
        )}
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
