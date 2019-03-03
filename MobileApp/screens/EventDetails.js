import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import IconButton from "../components/IconButton";
import DismissKeyboard from "../components/DismissKeyboard";
import EventDetailMessagesList from "../components/EventDetailMessagesList";

class EventDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      message: ""
    };
  }

  static navigationOptions = ({ navigation }) => {
    const { eventName } = navigation.state.params;

    return {
      headerTitle: eventName,
      headerRight: (
        <IconButton
          borderStyle={{ margin: 30 }}
          source={require("../assets/Icons/menu.png")}
        />
      )
    };
  };

  onChangeText = (value, text) => {
    this.setState({ [value]: text });
  };

  // async componentDidMount() {
  //   const response = await fetch(
  //     "http://61f950e6.ngrok.io/createEvent"
  //   );

  //   const responseJson = await response.json();
  //   this.setState({ message: responseJson, isLoading: false });
  // }

  render() {
    // const { isLoading, message } = this.state;

    return (
      <DismissKeyboard>
        <View style={styles.mainContainer}>
          {/* <View style={styles.messageInputStyle}>
            {isLoading ? <Text style={styles.textStyle} textAlign="center">Empty Message
            </Text> : <Text style={styles.textStyle} textAlign="center">{message}
            </Text>}
          </View> */}

          <EventDetailMessagesList />
          <IconButton source={require("../assets/Icons/addCircle.png")} />
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
