import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import FriendsScreen from '../screens/FriendsScreen';
import Onboarding2 from '../screens/Onboarding/Onboarding2'
import Onboarding1 from '../screens/Onboarding/Onboarding1'

const Stack = createStackNavigator();

const FriendsStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=' ' component={Onboarding1} options={{headerShown: false}} />
      {/* <Stack.Screen name=' ' component={FriendsScreen} options={{headerShown: false}} /> */}
    </Stack.Navigator>
  );
};

export default FriendsStackNavigator;
