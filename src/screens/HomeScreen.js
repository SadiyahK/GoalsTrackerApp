// import React from 'react';
// import {View, StyleSheet, Button, ImageBackground, StatusBar} from 'react-native';

// let imagePath = require("../images/pinkclouds.jpg");


// export default function HomeScreen({ navigation }) {
//     return(
//         <View styles={styles.container}>
//           <StatusBar barStyle="dark-content" />
           
//             <ImageBackground source={imagePath} style={styles.image}>
//                 <Button title="Short Term Goals" style={styles.button} onPress={() => navigation.navigate({ routeName: 'STGScreen'})} /> 
//             </ImageBackground>
            
//             <ImageBackground source={imagePath} style={styles.image}>
//                 <Button title="Long Term Goals"  style={styles.button} onPress={() => navigation.navigate({ routeName: 'LTGScreen'})}/>
//             </ImageBackground>

//         </View>
//     )}


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     frame: {
//       justifyContent: 'space-between',
//       alignContent: 'center'
//     },
  
//     button: {
//       color: '#8AC0DE',
//       margin: 20,
//       padding: 10,
//       height: 50,
//       //backgroundColor: '#8AC0DE',
//       //backgroundColor: 'rgba(52, 52, 52, 0.8)',
//       //shadowOpacity: 0.5,
//       shadowColor: 'rgba(52, 52, 52, 0.8)',
//     },
//     image: {
//       //flex: 1,
//       resizeMode: "cover",
//       justifyContent: "center",
//       alignItems: 'center',
//       borderWidth: 5,
//       borderColor: '#F9E1E0',
//       padding: 30,
//       justifyContent: 'space-between',
//     },
//   });
