import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../CarItem/styles";

const StyledButton = (props) => {
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.warn("Hey");
        }}
      >
        <Text>Custom Order</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
