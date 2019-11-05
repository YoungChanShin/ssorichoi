import React, { Component } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Screen from "./Screen";

export default class ContentScreen extends Component {
  static navigationOptions = {
    title: "Lesona 1: fihavanana no maha Malagasy"
  };

  handlePress() {
    alert("Content Press");
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 400, height: 250 }}
          source={require("../../assets/splash_img.png")}
        />
        <View style={{ marginTop: 40 }}>
          <Text style={styles.title}>fihavanana</Text>
          <Text style={styles.title}>na</Text>
          <Text style={styles.title}>a</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    color: "red",
    fontWeight: "bold",
    fontSize: 30
  }
});
