import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

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
          <Text style={styles.rupee}>र 210</Text>
          <Button
            style={styles.button}
            title="ADD"
            onPress={() => Alert.alert("Simple Button pressed")}
          />
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
    color: "lightgrey"
  },
  icon: {
    width: 50,
    height: 54
  },
  rupee: {
    fontSize: 13
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 30
  }
});
