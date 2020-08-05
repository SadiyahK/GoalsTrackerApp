import React from 'react';
import {View, StyleSheet, Text, StatusBar } from 'react-native';

export default class AccountScreen extends React.Component{

    static navigationOption = {
    };

    render(){
    return(
        <View styles={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Account</Text>
        </View>
    )}
}

const styles = StyleSheet.create({
  container: {
      flex: 1 ,
      alignItems: 'center',
      justifyContent: 'center'
  }
})