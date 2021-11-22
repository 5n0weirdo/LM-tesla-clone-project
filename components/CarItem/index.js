import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props;
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={{ height: "110%", width: "100%", position: "absolute" }}
      />
      <View style={styles.titles}>
        <Text style={styles.title}> {name}</Text>
        <Text style={styles.subTitle}>
          {tagline}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <StyledButton
          type="primary"
          content={"Custom order"}
          onPress={() => {
            console.warn("Custom order pressed");
          }}
        />
      </View>
      <View style={styles.btn2Container}>
        <StyledButton
          type="secondary"
          content={"Existing Invetory"}
          onPress={() => {
            console.warn("Existing Invetory pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
