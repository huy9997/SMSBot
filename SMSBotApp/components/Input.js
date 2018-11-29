import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = props => {
  const {
    borderStyle,
    inputStyle,
    placeholder,
    placeholderTextColor,
    value,
    onChangeText,
    stateToBeChanged,
    keyboardType,
    textContentType,
    secureTextEntry,
    multiline,
    scrollEnabled
  } = props;

  return (
    <View style={borderStyle}>
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={text => onChangeText(stateToBeChanged, text)}
        keyboardType={keyboardType}
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        scrollEnabled={scrollEnabled}
      />
    </View>
  );
};

Input.defaultProps = {
  borderStyle: {
    justifyContent: "center",
    borderRadius: 50,
    width: "80%",
    height: 60,
    padding: 10,
    backgroundColor: "#005FE1"
  },
  inputStyle: {
    height: "100%",
    width: "100%",
    color: "white",
    fontSize: 20
  }
};

export default Input;
