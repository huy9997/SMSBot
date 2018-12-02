import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReceiver: false
    };
  }

  render() {
    const { message, isReceiver, date } = this.props;

    if (isReceiver) {
      return (
        <View style={styles.messageReceiverContainer}>
          <Text style={styles.textStyle}>{date}</Text>
          <View style={styles.messageReceiverBorder}>
            <Text style={styles.textStyle}>{message}</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.messageSenderContainer}>
          <Text style={styles.textStyle}>{date}</Text>
          <View style={styles.messageSenderBorder}>
            <Text style={styles.textStyle}>{message}</Text>
          </View>
        </View>
      );
    }
  }
}

Message.defaultProps = {
  message:
    "Hello There I like fried chicken and waffles. I also like steak and pho. What do you like eating ? Hello There I like fried chicken and waffles. I also like steak and pho. What do you like eating ?",
  date: "12/01/2018"
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  messageSenderContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginTop: 5,
    marginBottom: 5
  },
  messageSenderBorder: {
    flex: -1,
    marginLeft: 5,
    backgroundColor: "#005FE1",
    borderRadius: 10,
    padding: 5,
    maxWidth: "80%"
  },
  messageReceiverContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: "100%",
    marginTop: 5,
    marginBottom: 5
  },
  messageReceiverBorder: {
    flex: -1,
    marginRight: 5,
    backgroundColor: "#0144A0",
    borderRadius: 10,
    padding: 5,
    maxWidth: "80%"
  },
  textStyle: {
    color: "white",
    alignSelf: "center"
  }
});

export default Message;
