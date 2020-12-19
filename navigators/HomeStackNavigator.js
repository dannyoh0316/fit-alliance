import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=' ' component={LoginScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
