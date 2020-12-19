import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';


const Stack = createStackNavigator();

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=' ' component={SettingsScreen} />
    </Stack.Navigator>
  )
}

export default SettingsStackNavigator;
