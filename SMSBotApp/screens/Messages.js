import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import IconButton from "../components/IconButton";
import MessagesList from "../components/MessagesList";

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // make this dynamic
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Contact Name",
      headerRight: (
        <IconButton
          borderStyle={{ margin: 30 }}
          source={require("../assets/icon.png")}
        />
      )
    };
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{ flex: 7 }}>
          <MessagesList />
        </View>
        <View style={{ flex: 1, backgroundColor: "red" }} />
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

export default Messages;
