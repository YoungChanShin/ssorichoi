import React, { Component } from "react";
import { NavigationActions } from "react-navigation";

import Screen from "./Screen";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      props.navigation.navigate("DrawerScreen");
    }, 3000);
  }

  render() {
    return (
      <Screen
        title="Splash screen"
        color="lightgrey"
        onPress={() => this.handlePress()}
      />
    );
  }
}
