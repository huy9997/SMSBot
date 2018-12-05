import React, { Component } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import IconButton from "../components/IconButton";
import MessagesList from "../components/MessagesList";
import Input from "../components/Input";

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  static navigationOptions = ({ navigation }) => {
    const { contactName } = navigation.state.params;

    return {
      headerTitle: contactName,
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
    const { message } = this.state;

    console.log(message);

    return (
      <View style={styles.mainContainer}>
        <View style={styles.messagesContainer}>
          <MessagesList />
        </View>
        <KeyboardAvoidingView
          style={styles.replyContainer}
          behavior="padding"
          keyboardVerticalOffset={85}
        >
          <IconButton
            borderStyle={styles.buttonBorder}
            source={require("../assets/icon.png")}
          />
          <Input
            borderStyle={styles.messageInputBorder}
            inputStyle={styles.inputStyle}
            placeholder="Message Contact Name"
            value={message}
            stateToBeChanged="message"
            onChangeText={this.onChangeText}
            multiline={true}
            scrollEnabled={true}
          />
          <IconButton
            borderStyle={styles.buttonBorder}
            source={require("../assets/icon.png")}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  messagesContainer: {
    flex: 10
  },
  replyContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#0C72FF"
  },
  buttonBorder: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  messageInputBorder: {
    flex: 5
  },
  inputStyle: {
    color: "white",
    fontSize: 20
  }
});

export default Messages;
