import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.getcontainer}>
        <View style={{ width: 45 }}>
          <Text style={styles.product}>Products</Text>
        </View>
        <View style={{ width: 55 }}>
          <Text></Text>
        </View>
        <View
          style={{
            width: 55,
            marginRight: -10,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Ionicons
            name="md-checkmark-circle"
            size={14}
            color="green"
            style={styles.icon}
          >
            <Text style={styles.Filtertext}>Filter</Text>
          </Ionicons>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  getcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 25
  },
  product: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    marginLeft: -28
  },
  Filtertext: {
    fontSize: 14,
    color: "black"
  },
  icon: {}
});
