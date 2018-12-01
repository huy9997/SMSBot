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
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

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
          <Event text="not loaded" />
        ) : (
          <React.Fragment>
            {events.map(event => {
              return <Event key={event.id} text={event.name} />;
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
