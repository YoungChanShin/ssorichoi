import React, { Component } from "react";
import Screen from "./Screen";
import { NavigationActions } from "react-navigation";

export default class DrawerMenu extends Component {
  handlePress() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "SplashScreen" })]
    });

    // Actually, this should be a login screen.. but u get it
    this.props.screenProps.rootNavigation.dispatch(resetAction);
  }
  render() {
    return (
      <Screen
        title="Drawer screen"
        color="lightblue"
        onPress={() => this.handlePress()}
      />
    );
  }
}
