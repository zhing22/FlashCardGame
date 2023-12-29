import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const EquationDisplay = ({ value1, value2, mathSymbol }) => {
  const imagePaths = {
    0: require("../assets/images/number/number_0.png"),
    1: require("../assets/images/number/number_1.png"),
    2: require("../assets/images/number/number_2.png"),
    3: require("../assets/images/number/number_3.png"),
    4: require("../assets/images/number/number_4.png"),
    5: require("../assets/images/number/number_5.png"),
    6: require("../assets/images/number/number_6.png"),
    7: require("../assets/images/number/number_7.png"),
    8: require("../assets/images/number/number_8.png"),
    9: require("../assets/images/number/number_9.png"),
  };

  const mathSymbolPaths = {
    0: require("../assets/images/math/math_plus.png"),
    1: require("../assets/images/math/math_minus.png"),
    2: require("../assets/images/math/math_multiply.png"),
    3: require("../assets/images/math/math_divide.png"),
  };

  const imageSource1 = imagePaths[value1];
  const imageSource2 = imagePaths[value2];
  const mathSymbolSource = mathSymbolPaths[mathSymbol];

  return (
    <View style={styles.equationContainer}>

      <View style={styles.topImageContainer}>
        <Image style={styles.topImage} source={imageSource1} />
        <Image style={styles.topImage} source={mathSymbolSource} />
        <Image style={styles.topImage} source={imageSource2} />
      </View>

      <View style={styles.bottomImageContainer}>
        <Image
          style={styles.bottomImage}
          source={require("../assets/images/math/math_equal.png")}
        />
        <Image
          style={styles.bottomImage}
          source={require("../assets/images/math/question_mark.png")}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  equationContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  topImageContainer: {
    flex: 1.7,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  topImage: {
    width: "33%",
    height: "90%",
    resizeMode: "contain",
  },
  bottomImageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomImage: {
    width: "25%",
    height: "80%",
    resizeMode: "contain",
  },
});

export default EquationDisplay;
