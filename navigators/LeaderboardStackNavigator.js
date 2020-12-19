import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LeaderboardScreen from '../screens/LeaderboardScreen/LeaderboardScreen';


const Stack = createStackNavigator();

const LeaderboardStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=' ' component={LeaderboardScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default LeaderboardStackNavigator;
