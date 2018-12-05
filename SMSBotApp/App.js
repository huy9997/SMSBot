import React from "react";
import { Provider } from "./context/Context";
import { createAppContainer } from "react-navigation";
import RootSwitch from "./navigation/RootSwitch";

import AuthenticationStack from "./navigation/AuthenticationStack";
import ApplicationStack from "./navigation/ApplicationStack";

// const AppContainer = createAppContainer(AuthenticationStack);
// const AppContainer = createAppContainer(ApplicationStack);

const AppContainer = createAppContainer(RootSwitch);

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
