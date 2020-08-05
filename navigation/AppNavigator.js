import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import BottomTabNavigation from './BottomTabNavigator';


export default createAppContainer(
  createSwitchNavigator({
    Main: BottomTabNavigation
  })
)
