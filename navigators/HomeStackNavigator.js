import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=' ' component={HomeScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
