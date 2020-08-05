import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import STGScreen from '../screens/STGScreen'
import LTGScreen from '../screens/LTGScreen'
import HomeScreen from '../screens/HomeScreen';

const screens = {
    Home: {
        screen: HomeScreen
    },
    STGScreen: {
      screen: STGScreen
    },
    LTGScreen: {
      screen: LTGScreen,
    },
  }

  const HomeStack = createStackNavigator(screens)

  export default HomeStack