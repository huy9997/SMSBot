import React from "react";
import { createAppContainer } from "react-navigation";
import IntroStack from "./navigation/IntroStack";

const AppContainer = createAppContainer(IntroStack);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
