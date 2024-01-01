import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CorrectResponse = ({}) => {
  return (
    <View style={styles.overlay}>
      <Image
        style={styles.catImage}
        source={require("../assets/images/cat/cat_correct.png")}
      />
      <Text style={{ fontSize: 20 }}>Correct Answer!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    backgroundColor: "#B7D3F2",
  },
  catImage: {
    width: 170,
    height: 170,
    resizeMode: "contain",
  },
});

export default CorrectResponse;
