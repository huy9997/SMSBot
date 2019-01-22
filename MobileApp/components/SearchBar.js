import React from "react";
import { View, TextInput, Image } from "react-native";

const SearchBar = props => {
  const {
    source,
    placeholder,
    borderStyle,
    iconStyle,
    inputStyle,
    value,
    stateToBeChanged,
    onChangeText
  } = props;

  return (
    <View style={borderStyle}>
      <Image source={source} style={iconStyle} />
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={text => onChangeText(stateToBeChanged, text)}
      />
    </View>
  );
};

SearchBar.defaultProps = {
  borderStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 60,
    width: "80%",
    backgroundColor: "#E9EAED"
  },
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    height: 30,
    width: 30
  },
  inputStyle: {
    flex: 1,
    height: "100%",
    // color: "black",
    fontSize: 20
    // backgroundColor: "blue"
  }
};

export default SearchBar;
