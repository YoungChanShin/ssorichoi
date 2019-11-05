import React from "react";
import PropTypes from "prop-types";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from "react-native";
import { Icon } from "react-native-elements";

const window = Dimensions.get("window");

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: "black",
    padding: 20
  },
  avatarContainer: {
    marginBottom: 50,
    marginTop: 20
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 24,
    flex: 1
  },
  name: {
    position: "absolute",
    left: 70,
    top: 20,
    fontSize: 18,
    color: "#FFFFFF"
  },
  item: {
    fontSize: 25,
    fontWeight: "300",
    paddingTop: 5,
    paddingBottom: 25,
    color: "white"
  }
});

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={require("./assets/avatar.png")} />
        <Text style={styles.name}>Welcome to 귤가다</Text>
      </View>

      <Text onPress={() => onItemSelected("About")} style={styles.item}>
        공고 페이지
      </Text>

      <Text onPress={() => onItemSelected("Contacts")} style={styles.item}>
        달력
      </Text>

      <Text onPress={() => onItemSelected("Contacts")} style={styles.item}>
        계약 체결
      </Text>

      <Text onPress={() => onItemSelected("Contacts")} style={styles.item}>
        이용기록
      </Text>

      <Text onPress={() => onItemSelected("Contacts")} style={styles.item}>
        마이페이지
      </Text>

      <Icon name="sign-in" type="font-awesome" color="white" />
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired
};
