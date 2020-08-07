import React from 'react';
import {View, StyleSheet, Text, StatusBar } from 'react-native';

export default function SettingsScreen({ navigation }) {

    return(
        <View styles={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1 ,
      alignItems: 'center',
      justifyContent: 'center'
  }
})