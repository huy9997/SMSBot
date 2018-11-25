import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Button from "../components/Button";

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header} text="SMS Bot" />
        <View style={styles.centerContainer}>
          {/* logo half */}
          <View style={styles.text}>
            <Button text="press me" />
            <Button text="press me also" />
          </View>
          {/* two button half */}
          <View style={styles.text}>
            <Button />
            <Button />
          </View>
        </View>
        <Footer style={styles.header} title />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  centerContainer: {
    flex: 5,
    backgroundColor: "green"
  },
  header: {
    flex: 1,
    flexDirection: "row"
  },
  text: {
    flex: 1
  }
});

export default StartScreen;
