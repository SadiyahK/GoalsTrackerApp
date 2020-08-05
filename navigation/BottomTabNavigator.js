import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';  

import HomeStack from './HomeStack';
import NotificationScreen from '../screens/NotificationScreen';
import AccountScreen from '../screens/AccountScreen';

const BottomTabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions:{  
            tabBarLabel:'Home',  
            tabBarIcon:({tintColor})=>(  
                <Icon name="ios-home" color={tintColor} size={25}/>  
            )  
          } 
    },
    Notifications: {
        screen: NotificationScreen,
        navigationOptions:{  
            tabBarLabel:'Notifications',  
            tabBarIcon:({tintColor})=>(  
                <Icon name="ios-notifications" color={tintColor} size={25}/>  
            )  
          }  
    },
    Account: {
        screen: AccountScreen,
        navigationOptions:{  
            tabBarLabel:'Profile',  
            tabBarIcon:({tintColor})=>(  
                <Icon name="ios-person" color={tintColor} size={25}/>  
            )  
          }  
    }, 
})

export default BottomTabNavigator;