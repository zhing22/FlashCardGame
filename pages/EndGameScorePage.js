import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const EndGameScorePage = ({ score, onPlayAgain }) => {
  const scoreImagePaths = {
    0: require("../assets/images/cat/cat_sad.png"),
    1: require("../assets/images/cat/cat_play.png"),
    2: require("../assets/images/cat/cat_happy.png"),
  };

  function getScoreImageSource(score) {
    if (score < 5) {
      return scoreImagePaths["0"];
    } else if (score < 15) {
      return scoreImagePaths["1"];
    } else {
      return scoreImagePaths["2"];
    }
  }

  return (
    <View style={styles.endGameContainer}>
      <View style={styles.endGameContent}>
        <Text style={styles.endGameText}>Time's Up!</Text>
        <Text style={styles.endGameText}>Your Score: {score}</Text>
        <Image
          style={{ width: 300, height: 300, resizeMode: "contain" }}
          source={getScoreImageSource(score)}
        />
        <Button title=" Play Again " onPress={onPlayAgain} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  endGameContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  endGameContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  endGameText: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default EndGameScorePage;
