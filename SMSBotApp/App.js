import React from "react";
import { createAppContainer } from "react-navigation";
import IntroStack from "./navigation/IntroStack";
import { Provider } from "./context/Context";

const AppContainer = createAppContainer(IntroStack);

class App extends React.Component {
  render() {
    return (
      <Provider>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
