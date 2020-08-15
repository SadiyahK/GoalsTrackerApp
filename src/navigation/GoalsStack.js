import { createStackNavigator } from 'react-navigation-stack';

import AllGoalsScreen from '../screens/AllGoalsScreen'
import GoalScreen from '../screens/GoalScreen'

const screens = {
    GoalsScreen: {
      screen: AllGoalsScreen
    },
    GoalScreen: {
      screen: GoalScreen
    },
  }

  const GoalsStack = createStackNavigator(screens)

  export default GoalsStack