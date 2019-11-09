import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class JustifyContentBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 50, height: 100 }}>
          <Image
            style={styles.getphoto}
            source={{
              uri:
                "https://colorlib.com/preview/theme/martine/img/single_place_1.png"
            }}
          />
        </View>
        <View style={styles.gettext}>
          <Text style={styles.title}>Butter chicken</Text>
          <Text style={styles.subtitle}>Amirtsari Lovely Dhaba JALANDHAR</Text>
        </View>
        <View style={{ width: 100, height: 50 }} />
        <Text>200</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  getphoto: {
    width: 58,
    height: 54,
    borderRadius: 4
  },
  gettext: {
    width: 100,
    height: 45
  },
  title: {
    fontSize: 13,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 10
  }
});
