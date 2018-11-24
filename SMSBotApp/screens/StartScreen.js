import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header} text="SMS Bot" />
        <Text style={styles.text}>Hello</Text>
        <Footer style={styles.header} title />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    flex: 1
  },
  text: {
    flex: 5
  }
});

export default StartScreen;
