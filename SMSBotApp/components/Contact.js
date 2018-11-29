import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import TextBox from "../components/TextBox";

class Contact extends React.Component {
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
    const { name, phoneNumber } = this.props;

    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={this.reverseIsChecked}
        >
          {this.state.isChecked ? (
            <Image
              source={require("../assets/icon.png")}
              style={{ width: 50, height: 50 }}
            />
          ) : (
            <Image
              source={require("../assets/splash.png")}
              style={{ width: 30, height: 30 }}
            />
          )}
        </TouchableOpacity>
        <View style={styles.contactInformationContainer}>
          <TextBox text={name} />
          <TextBox text={phoneNumber} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "black"
  },
  iconContainer: {
    justifyContent: "center",
    marginLeft: "10%",
    marginRight: "10%",
    backgroundColor: "red"
  },
  contactInformationContainer: {
    alignItems: "flex-start",
    backgroundColor: "blue"
  }
});

export default Contact;
