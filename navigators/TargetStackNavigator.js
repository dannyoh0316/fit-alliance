import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TargetScreen from '../screens/TargetScreen';


const Stack = createStackNavigator();

const TargetStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=' ' component={TargetScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default TargetStackNavigator;
