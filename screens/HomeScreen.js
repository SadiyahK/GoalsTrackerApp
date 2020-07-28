import React from 'react';
import {View, StyleSheet, Button, ImageBackground} from 'react-native';

const HomeScreen = props => {

    let imagePath = require("../images/pinkclouds.jpg");

    return (
        <View style={styles.frame}>
        <ImageBackground source={imagePath} style={styles.image}>
          <Button title="Short Term Goals" style={styles.button} onPress= {() => {this.props.navigation.navigate(ShortTermGoals)}}/> 
        </ImageBackground>

        <ImageBackground source={imagePath} style={styles.image}>
          <Button title="Long Term Goals"  style={styles.button} onPress= {() => {}}/> 
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
    frame: {
      justifyContent: 'space-between',
      alignContent: 'center'
    },
  
    button: {
      color: '#8AC0DE',
      margin: 20,
      padding: 10,
      height: 50,
      //backgroundColor: '#8AC0DE',
      //backgroundColor: 'rgba(52, 52, 52, 0.8)',
      //shadowOpacity: 0.5,
      shadowColor: 'rgba(52, 52, 52, 0.8)',
    },
    image: {
      //flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: 'center',
      borderWidth: 5,
      borderColor: '#F9E1E0',
      padding: 30,
      justifyContent: 'space-between',
    },
  });

export default HomeScreen;