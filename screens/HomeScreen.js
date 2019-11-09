import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import Hello from "../components/Hello";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
function Separator() {
  return <View style={styles.separator} />;
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <SearchBar />
          <Hello />
          <Separator />
          <Banner />
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};
function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  separator: {
    marginVertical: 18,
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
