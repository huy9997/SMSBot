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
    const response = await fetch("http://61f950e6.ngrok.io/twilio");

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
                contactName={message.name}
                initials={message.id}
                recentMessage={message.recentMessage}
                status={message.status}
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
