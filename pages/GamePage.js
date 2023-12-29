// // GamePage.js
// import React from 'react';
// import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';

// const GamePage = ({
//   timer,
//   value1,
//   value2,
//   mathSymbolSource,
//   imageSource1,
//   imageSource2,
//   number,
//   onChangeNumber,
//   checkInputHandler,
// }) => {
//   return (
//     <View>
//       {/*... (other elements)*/}
//       <View style={styles.scoreContainer}>
//         <Text style={{ fontSize: 20 }}>Time Remaining: {timer}</Text>
//         {/* ... */}
//       </View>

//       {/*... (other elements)*/}
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.inputTextBox}
//           onChangeText={onChangeNumber}
//           value={number}
//           placeholder="input answer here"
//           keyboardType="numeric"
//         />
//         <Button title=" Confirm " onPress={checkInputHandler} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   //... (styles)
// });

// export default GamePage;
