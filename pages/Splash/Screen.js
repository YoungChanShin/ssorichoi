import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  }
});

export default class Screen extends Component {
  render() {
    const { color, title, onPress } = this.props;

    return (
      <TouchableOpacity
        style={[styles.container, { backgroundColor: color }]}
        onPress={() => onPress.bind(this)()}
      >
        <Text style={styles.paragraph}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
