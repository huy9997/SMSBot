import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from "react-native";

import IconButton from "../components/IconButton";
import MessagesList from "../components/MessagesList";
import Input from "../components/Input";
import DismissKeyboard from "../components/DismissKeyboard";

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
      <DismissKeyboard>
        <View style={styles.mainContainer}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            keyboardVerticalOffset={90}
          >
            <View style={styles.messagesContainer}>
              <MessagesList />
            </View>
            <View style={styles.replyContainer}>
              <IconButton
                borderStyle={styles.buttonBorder}
                source={require("../assets/icon.png")}
              />
              <Input borderStyle={styles.messageInputBorder} />
              <IconButton
                borderStyle={styles.buttonBorder}
                source={require("../assets/icon.png")}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </DismissKeyboard>
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
    flex: 5,
    height: "100%"
  }
});

export default Messages;
