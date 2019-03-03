import React, { Component } from "react";
import { Text, StyleSheet, FlatList } from "react-native";

import Message from "../components/Message";

class MessagesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "http://61f950e6.ngrok.io/messageList"
    );

    const responseJson = await response.json();
    this.setState({ messages: responseJson.reverse(), isLoading: false });
  }

  renderItem = ({ item }) => {
    if (item.id % 2 == 0) {
      return <Message message={item.body} isReceiver={false} />;
    } else {
      return <Message message={item.body} isReceiver={true} />;
    }
  };

  keyExtractor = message => {
    return `${message.id}`;
  };

  render() {
    const { messages, isLoading } = this.state;

    return (
      <FlatList
        style={styles.mainContainer}
        data={messages}
        extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        inverted={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  }
});

export default MessagesList;
