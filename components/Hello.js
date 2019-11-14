import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class JustifyContentBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 10, height: 54 }}>
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
          <Text style={styles.subtitle}>Amritsari Lovely Dhaba JALANDHAR</Text>
        </View>
        <View style={styles.icon}>
          <Text style={styles.rupee}>₹ 210</Text>
          <Text style={styles.text}>+ ADD</Text>
        </View>
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
    width: 56,
    height: 54,
    borderRadius: 2,
    marginLeft: -9
  },
  gettext: {
    width: 150,
    height: 54
  },
  title: {
    fontSize: 15,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 10,
    color: "#A9A9A9"
  },
  icon: {
    width: 55,
    height: 54
  },
  rupee: {
    fontSize: 13,
    width: 54,
    textAlign: "center"
  },
  text: {
    borderWidth: 1,
    borderColor: "#F0E68C",
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 54,
    textAlign: "center",
    marginTop: 6
  }
});
