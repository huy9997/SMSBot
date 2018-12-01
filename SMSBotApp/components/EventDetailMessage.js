import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";

class EventDetailMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "unsure"
    };
  }

  // conditional render on icon depending on which of three statuses
  // going, not going, unsure
  render() {
    const { status } = this.state;

    return (
      <TouchableOpacity style={styles.mainContainer}>
        {/* icon */}
        <View style={styles.initialLabelStyle}>
          <Text style={styles.textStyle}>NS</Text>
        </View>

        {/* message */}
        <View style={styles.textBorder}>
          <Text
            style={styles.textStyle}
            numberOfLines={3}
            ellipsizeMode={"tail"}
          >
            Yeah sure, I can make it to the event. I'll bring some fried chicken
            and beer.
          </Text>
        </View>
        {/* symbol */}
        <Image
          source={require("../assets/icon.png")}
          style={styles.statusIconStyle}
        />
        {/* date */}
        <Text style={styles.textStyle}>11/23/2018</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 70,
    width: "90%",
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#005FE1"
  },
  initialLabelStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#559BFD"
  },
  textBorder: {
    width: "40%"
  },
  statusIconStyle: {
    height: 40,
    width: 40
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  }
});

export default EventDetailMessage;
