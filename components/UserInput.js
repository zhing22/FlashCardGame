import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const UserInput = ({ onChangeNumber , number, checkInputHandler, }) => {

  return (
    <View style={styles.inputContainer}>
        <TextInput
        style={styles.inputTextBox}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="input answer here"
        keyboardType={Platform.OS === 'ios' ? 'numbers-and-punctuation' : 'numeric'}
        />
        <Button title=" Confirm " onPress={checkInputHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      inputTextBox: {
        height: 45,
        width: 200,
        borderWidth: 1,
        padding: 15,
      },
});

export default UserInput;
