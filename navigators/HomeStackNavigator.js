import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import WorkoutScreen from '../screens/WorkoutScreen.js/WorkoutScreen';


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name='WorkoutScreen' component={WorkoutScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
