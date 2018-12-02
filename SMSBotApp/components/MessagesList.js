import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

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
      "https://jsonplaceholder.typicode.com/comments"
    );

    const responseJson = await response.json();
    this.setState({ messages: responseJson, isLoading: false });
  }

  render() {
    const { messages, isLoading } = this.state;

    return (
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={styles.scrollViewInnerStyle}
        ref={scrollView => (this.scrollView = scrollView)}
        onContentSizeChange={() => {
          this.scrollView.scrollToEnd({ animated: false });
        }}
      >
        {isLoading ? (
          <Message />
        ) : (
          messages.map(message => {
            if (message.id % 2 == 0) {
              return (
                <Message
                  key={message.id}
                  message={message.body}
                  isReceiver={false}
                />
              );
            } else {
              return (
                <Message
                  key={message.id}
                  message={message.body}
                  isReceiver={true}
                />
              );
            }
          })
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

export default MessagesList;
