import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';  

import GoalsStack from './GoalsStack';
import AccountStack from './AccountStack';
import NotificationScreen from '../screens/NotificationScreen';

const RootNavigator = createBottomTabNavigator({
    Home: {
        screen: GoalsStack,
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
        screen: AccountStack,
        navigationOptions:{  
            tabBarLabel:'Profile',  
            tabBarIcon:({tintColor})=>(  
                <Icon name="ios-person" color={tintColor} size={25}/>  
            )  
          }  
    }, 
})

export default RootNavigator;