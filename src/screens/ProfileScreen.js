import React from 'react';
import {View, StyleSheet, Text, StatusBar, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {

    return(
        <View styles={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>profile</Text>
            <Button title="settings" onPress={() => navigation.navigate({ routeName: 'SettingsScreen'})} />
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