# Flash Card Game

## setup

1. Download and open project folder in terminal
2. Enter "yarn install" in terminal
3. Enter "yarn start" in terminal
4. Download Expo Go on mobile device
5. Scan the QR code with your mobile device in Expo
   more setup details can be found at https://docs.expo.dev/get-started/expo-go/

## requirements

1.  Create a program for practicing multiplication tables
2.  Generate two random numbers between zero and 12
3.  Allow the user to input the product
4.  Indicate whether the user was correct or incorrect
5.  If the user was correct, generate two more numbers
6.  Keep score: award one point for correct answers; subtract a point for incorrect answers
7.  Add a timer. The goal is to achieve the highest score in one minute of play. Starting a new
    game resets the score to zero.
8.  Add other operations (+, -, x, /)
9.  Track which number combinations have been shown. Ensure that all 169 pairs are guaranteed to be shown eventually.

## modifications to requirement

1. As I am using images for displaying numbers, I only had the image resources from 0 to 9, so this game will only generate two random numbers between zero and 9. The specification of "Generate two random numbers between zero and 12" can be achieved by manually creating the image resources for the numbers 10, 11 and 12.
2. I did not include the operations for division. This is because we only show numbers from 0 to 9, so the number of whole division would be minimal. I did not want to include decimals into the the game to keep it simple for the player.
3. As there are only numbers from 0 to 9, there will only be 100 pairs of numbers, which are guaranteed to be shown eventually.
