import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import StartGamePage from "./pages/StartGamePage";
import EndGameScorePage from "./pages/EndGameScorePage";
import CorrectResponse from "./components/CorrectResponse";
import WrongResponse from "./components/WrongResponse";
import EquationDisplay from "./components/EquationDisplay";
import UserInput from "./components/UserInput";

export default function App() {
  const [number, onChangeNumber] = React.useState("");
  const [score, setScore] = React.useState(0);
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [showCorrectImage, setShowCorrectImage] = useState(false);
  const [showWrongImage, setShowWrongImage] = useState(false);
  const [mathSymbol, setMathSymbol] = React.useState("");
  const [numberPairs, setNumberPairs] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(60); // 60 seconds
  const [showEndGameScore, setShowEndGameScore] = useState(false);

  useEffect(() => {
    // check if game end
    if (timer === 0 && gameStarted) {
      handleGameOver();
    };

    // update timer
    if (gameStarted) {
      const interval = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          clearInterval(interval);
          setGameStarted(false);
          setScore(0); // Reset score when the timer reaches 0
        }
      }, 1000);

      return () => clearInterval(interval); // Clear interval on unmount
    }
  }, [gameStarted, timer]);

  function handleGameOver() {
    setShowEndGameScore(true);
    setGameStarted(false); // Stop the game when showing the end game score
  }

  function playAgain() {
    setGameStarted(true);
    setShowEndGameScore(false);
    setScore(0);
    onChangeNumber(""); // Clear the number input
  }

  useEffect(() => {
    // Track which number combinations have been shown. Ensure that all 100 pairs are guaranteed to be shown eventually.
    const allNumberPairs = generateAllNumberPairs(); // Generate all number pairs
    shuffleArray(allNumberPairs); // Shuffle the pairs
    setNumberPairs(allNumberPairs); // Set the shuffled pairs as state
    showNextNumberPair(); // Show the first pair
    setMathSymbol(`${Math.floor(Math.random() * 3)}`);
    setTimer(60); // Reset the timer when starting a new game
  }, [gameStarted]);

  function generateAllNumberPairs() {
    const pairs = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        pairs.push({ value1: `${i}`, value2: `${j}` });
      }
    }
    return pairs;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function showNextNumberPair() {
    if (numberPairs.length > 0) {
      const pair = numberPairs.pop(); // Get the next pair from the list
      setValue1(pair.value1);
      setValue2(pair.value2);
    }
  }

  useEffect(() => {
    // show correct response modal after user input
    if (showCorrectImage) {
      // Set a timeout to hide the image after 1 second
      const timer = setTimeout(() => {
        setShowCorrectImage(false);
      }, 400);
      return () => clearTimeout(timer); // Clear the timeout if the component unmounts
    }
  }, [showCorrectImage]);

  useEffect(() => {
    // show wrong response modal after user input
    if (showWrongImage) {
      // Set a timeout to hide the image after 1 second
      const timer = setTimeout(() => {
        setShowWrongImage(false);
      }, 400);
      return () => clearTimeout(timer); // Clear the timeout if the component unmounts
    }
  }, [showWrongImage]);

  function checkInputHandler() {
    // check answer after user submit input
    // compute correct answer
    const val1 = parseInt(value1);
    const val2 = parseInt(value2);
    const inputNumber = parseInt(number);
    let correctAnswer = 0;
    if (mathSymbol === "0") {
      correctAnswer = val1 + val2;
    } else if (mathSymbol === "1") {
      correctAnswer = val1 - val2;
    } else if (mathSymbol === "2") {
      correctAnswer = val1 * val2;
    }

    if (correctAnswer === inputNumber) {
      setScore(score + 1); // Increment score by 1
      // Randomize value1 and value2 between 0 and 9 (inclusive)
      showNextNumberPair();
      setMathSymbol(`${Math.floor(Math.random() * 3)}`);
      setShowCorrectImage(true); // Show the correct image
    } else {
      setScore(score - 1); // Decrement score by 1
      setShowWrongImage(true);
    }
    onChangeNumber(""); // Clear the user input
  }


  return (
    <View style={styles.container}>
      {!gameStarted && !showEndGameScore && ( // Render the start page when game is not started and end game modal isn't shown
        <StartGamePage onStartGame={() => setGameStarted(true)} />
      )}

      {showEndGameScore && (
        <EndGameScorePage score={score} onPlayAgain={playAgain} />
      )}

      {gameStarted && !showEndGameScore && (
        <View>
          {showCorrectImage && <CorrectResponse />}
          {showWrongImage && <WrongResponse />}
          <View style={styles.scoreContainer}>
            <Text style={{ fontSize: 20 }}>Time Remaining: {timer}</Text>
            <Text style={{ fontSize: 30 }}>Score: {score}</Text>
          </View>
          <EquationDisplay value1={value1} value2={value2} mathSymbol={mathSymbol}/>
          <UserInput onChangeNumber={onChangeNumber} number={number} checkInputHandler={checkInputHandler}/>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B7D3F2",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  scoreContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
