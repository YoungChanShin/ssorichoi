import * as React from "react";
import { Button, View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";

import MainPage from "./AnnounceHome";
import NoticeCard from "./AnnounceDetail";

const AnnounceRoot = createStackNavigator(
  {
    Main: MainPage,
    NoticeCard: NoticeCard
  },
  {
    initialRouteName: "Main"
  }
);

const AppNotice = createAppContainer(AnnounceRoot);

export default class App extends React.Component {
  render() {
    return <AppNotice />;
  }
}
