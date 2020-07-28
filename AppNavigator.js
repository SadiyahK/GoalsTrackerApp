import { createStackNavigator } from 'react-navigation';
import Home from './screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = props => {
   return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
    //     {/* <Stack.Screen 
    //       name="NotificationScreen" 
    //       component={NotificationScreen} />
    //     <Stack.Screen 
    //       name="Account" 
    //       component={AccountScreen} />
    //     <Stack.Screen 
    //       name="Settings" 
    //       component={SettingsScreen} />
    //     <Stack.Screen 
    //       name="ShortTermGoals" 
    //       component={STGScreen} />
    //     <Stack.Screen 
    //       name="LongTermGoals" 
    //       component={LTGScreen} /> */}
    //   </Stack.Navigator>
    </NavigationContainer>
    ) 
}
