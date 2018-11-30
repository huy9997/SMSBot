import React from "react";

import { View, StyleSheet } from "react-native";

import EventsList from "../components/EventList";
import IconButton from "../components/IconButton";

// settings option ?
// show search bar and filter from search bar input ?

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearching: false
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ isSearching: this.isSearching });
  }

  isSearching = () => {
    const { isSearching } = this.state;
    console.log(isSearching);

    this.setState({ isSearching: !isSearching });
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Events",
      headerLeft: (
        <IconButton
          borderStyle={{
            margin: 30
          }}
          source={require("../assets/icon.png")}
        />
      ),
      headerRight: (
        <IconButton
          borderStyle={{
            margin: 30
          }}
          source={require("../assets/icon.png")}
          onPress={navigation.getParam("isSearching")}
        />
      )
    };
  };

  createEvent = () => {
    console.log("Create event");
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <EventsList />
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
