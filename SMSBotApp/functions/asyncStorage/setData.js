import { AsyncStorage } from "react-native";

const setData = async (key, value) => {
  try {
    const response = await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

module.exports = setData;
