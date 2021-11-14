import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/ModelX.jpeg")}
        style={{ height: "100%", width: "100%", position: "absolute" }}
      />
      <View style={styles.carContainer}></View>
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginBottom: "130%",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  title: { fontSize: 40, fontWeight: "700" },
  subTitle: {
    color: "#5c5e62",
  },
});
