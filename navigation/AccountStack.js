import { createStackNavigator } from 'react-navigation-stack';

import ProfileScreen from '../screens/ProfileScreen'
import SettingsScreen from '../screens/SettingsScreen'

const screens = {
    ProfileScreen: {
      screen: ProfileScreen
    },
    SettingsScreen: {
      screen: SettingsScreen
    },
  }

  const AccountStack = createStackNavigator(screens)

  export default AccountStack