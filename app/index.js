import HomeScreen from "./screens/HomeScreen";
import React from "react";

import EStyleSheet from "react-native-extended-stylesheet";
import RootNavigation from "./navigation/RootNaviation";

EStyleSheet.build({
  $first_color: "#1A7431",
  $body_bg_color: "#F2F2F2",
});

class App extends React.Component {
  render() {
    return (
      <>
        <RootNavigation />
      </>
    );
  }
}

export default App;
