import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const Event = props => {
  const { borderStyle, textStyle, eventName, navigation } = props;

  return (
    <TouchableOpacity
      style={borderStyle}
      onPress={() => navigation.navigate("EventDetails", { eventName })}
    >
      <Text style={textStyle}>{eventName}</Text>
    </TouchableOpacity>
  );
};

Event.defaultProps = {
  borderStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 125,
    width: "90%",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#0C72FF"
  },
  textStyle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    width: "90%"
  },
  eventName: "Use 'text' prop to change text"
};

export default withNavigation(Event);
