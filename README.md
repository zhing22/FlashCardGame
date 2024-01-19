# Flash Card Game
## setup
1. Download and open project folder in terminal
2. Enter "yarn start" in terminal
3. Download Expo Go on mobile device
4. Scan the QR code with your mobile device in Expo
more setup details can be found at https://docs.expo.dev/get-started/expo-go/

## modifications to requirement
1. As I am using images for displaying numbers, I only had the image resources from 0 to 9, so this game will only generate two random numbers between zero and 9. The specification of "Generate two random numbers between zero and 12" can be achieved by manually creating the image resources for the numbers 10, 11 and 12. 
2. I did not include the operations for division. This is because we only show numbers from 0 to 9, so the number of whole division would be minimal. I did not want to include decimals into the the game to keep it simple for the player. 
3. As there are only numbers from 0 to 9, there will only be 100 pairs of numbers, which are guaranteed to be shown eventually.
