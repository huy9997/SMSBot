import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Button from "../components/Button";
import TextBox from "../components/TextBox";

class CreateEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header style={styles.mainContainer} />
        <View style={styles.container}>
          {/* event dails */}
          <View style={styles.detailContainer} />
          {/* scroll list */}
          <View style={styles.scrollContainer} />
        </View>
        <Footer style={styles.mainContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  container: {
    flex: 6
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "black"
  },
  detailContainer: {
    flex: 1,
    backgroundColor: "yellow"
  }
});

export default CreateEvent;
