import React from "react";

import { StyleSheet, ScrollView } from "react-native";

import Event from "./Event";

// error handling in fetch

class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch("http://f1eb4775.ngrok.io/createEventData");

    const responseJson = await response.json();
    this.setState({ events: responseJson, isLoading: false });
  }

  render() {
    const { events, isLoading } = this.state;

    return (
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={styles.scrollViewInnerStyle}
      >
        {isLoading ? (
          <Event eventName="not loaded" />
        ) : (
          <React.Fragment>
            {events.map(event => {
              return <Event key={event.id} eventName={event.name} />;
            })}
          </React.Fragment>
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

export default EventList;