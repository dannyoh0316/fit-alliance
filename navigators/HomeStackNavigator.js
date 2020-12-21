import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SessionScreen from '../screens/WorkoutScreen.js/SessionScreen';
import WorkoutConnect from '../screens/WorkoutScreen.js/WorkoutConnect';
import WorkoutScreen from '../screens/WorkoutScreen.js/WorkoutRoom';


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name='WorkoutRoom' component={WorkoutScreen} options={{headerShown: false}} />
      <Stack.Screen name='WorkoutConnect' component={WorkoutConnect} options={{headerShown: false}} />
      <Stack.Screen name='SessionScreen' component={SessionScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
