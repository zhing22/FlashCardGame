import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const StartGamePage = ({ onStartGame }) => {
  return (
    <View style={styles.startGameContainer}>
      <Image
        style={{ width: 300, height: 300, resizeMode: "contain" }}
        source={require("../assets/images/cat/cat_study.png")}
      />
      <Text style={styles.startGameText}>
        Help Kitty complete their math homework!
      </Text>
      <Button title=" Start Game " onPress={onStartGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  startGameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  startGameText: {
    fontSize: 18,
    marginVertical: 20,
  },
});

export default StartGamePage;
