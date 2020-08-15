import React, {useState} from 'react';
import {Text, View, StatusBar, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import Card from '../components/Card';

export default function GoalsScreen({ navigation }) { 
    return(
        <View>
            <StatusBar barStyle="dark-content" />
            <Card>
                <Text> { navigation.getParam('title') } </Text>
                <Text> { navigation.getParam('body') } </Text>
                <Text> { navigation.getParam('deadline') } </Text>
            </Card>
            
        </View>
    )
 }