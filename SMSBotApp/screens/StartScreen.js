import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Button from "../components/Button";
import TextBox from "../components/TextBox";

class StartScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header} />
        <View style={styles.centerContainer}>
          {/* logo half */}
          <View style={styles.logoContainer}>
            <Image source={require("../assets/icon.png")} />
            <TextBox text="SMS Bot" />
          </View>
          {/* two button half */}
          <View style={styles.buttonsContainer}>
            <Button text="press me" />
            <Button text="press me also" />
          </View>
        </View>
        <Footer style={styles.header} title />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centerContainer: {
    flex: 6,
    backgroundColor: "black"
  },
  logoContainer: {
    flex: 1,
    marginLeft: "20%",
    marginRight: "20%",
    paddingTop: "20%",
    alignItems: "center"
  },
  buttonsContainer: {
    flex: 1,
    marginRight: "10%",
    marginLeft: "10%"
  },
  header: {
    flex: 1
  },
  text: {
    flex: 1
  }
});

export default StartScreen;
