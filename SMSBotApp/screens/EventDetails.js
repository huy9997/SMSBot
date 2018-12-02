import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import IconButton from "../components/IconButton";
import Input from "../components/Input";
import DismissKeyboard from "../components/DismissKeyboard";
import EventDetailMessage from "../components/EventDetailMessage";
import EventDetailMessagesList from "../components/EventDetailMessagesList";

class EventDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      message: ""
    };
  }

  // make this dynamic
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Event Name",
      headerRight: (
        <IconButton
          borderStyle={{ margin: 30 }}
          source={require("../assets/icon.png")}
        />
      )
    };
  };

  onChangeText = (value, text) => {
    this.setState({ [value]: text });
  };

  render() {
    const { isLoading, message } = this.state;

    return (
      <DismissKeyboard>
        <View style={styles.mainContainer}>
          <View style={styles.messageInputStyle}>
            <Text style={styles.textStyle} textAlign="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              dignissimos porro reiciendis voluptatem vero at neque maxime
              ratione, sequi enim possimus error accusantium et. Non vel eum
              earum magnam amet! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Non dignissimos porro reiciendis voluptatem vero
              at neque maxime ratione, sequi enim possimus error accusantium et.
              Non vel eum earum magnam amet! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Non dignissimos porro reiciendis
              voluptatem vero at neque maxime ratione, sequi enim possimus error
              accusantium et. Non vel eum earum magnam amet!
            </Text>
          </View>

          <EventDetailMessagesList />
          <IconButton source={require("../assets/icon.png")} />
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center"
  },
  messageInputStyle: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    width: "90%",
    backgroundColor: "#005FE1"
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  }
});

export default EventDetails;
