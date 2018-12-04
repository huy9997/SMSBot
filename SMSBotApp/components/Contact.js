import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class Contact extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };
  }

  reverseIsChecked = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    const {
      name,
      phoneNumberLabel,
      phoneNumber,
      borderStyle,
      iconStyle,
      textStyle
    } = this.props;
    const { isChecked } = this.state;

    return (
      <TouchableOpacity onPress={this.reverseIsChecked} style={borderStyle}>
        {isChecked ? (
          <Image style={iconStyle} source={require("../assets/icon.png")} />
        ) : (
          <Image style={iconStyle} source={require("../assets/splash.png")} />
        )}
        <View>
          <Text style={textStyle}>{name}</Text>
          <View style={styles.phoneNumberContainer}>
            <Text style={textStyle}>{phoneNumberLabel}</Text>
            <Text style={textStyle}>{phoneNumber}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  phoneNumberContainer: {
    flexDirection: "row"
  }
});

Contact.defaultProps = {
  borderStyle: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    width: "100%",
    paddingLeft: 25
  },
  iconStyle: {
    height: 30,
    width: 30,
    margin: 15
  },
  textStyle: {
    fontSize: 20,
    margin: 2,
    fontWeight: "bold",
    color: "white"
  }
};

export default Contact;
