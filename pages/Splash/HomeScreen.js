import React, { Component } from "react";
import Screen from "./Screen";

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  };

  handlePress() {
    this.props.screenProps.rootNavigation.navigate("ContentScreen");
  }
  render() {
    return (
      <Screen
        title="Home screen"
        color="lightred"
        onPress={() => this.handlePress()}
      />
    );
  }
}
