import React from 'react';
import {View, StyleSheet, Text, StatusBar } from 'react-native';

export default class NotificationScreen extends React.Component{

    static navigationOption = {

    };

    render(){
    return(
        <View styles={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Notifications</Text>
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