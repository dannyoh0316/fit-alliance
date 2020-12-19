import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding1 from '../screens/Onboarding/Onboarding1'
import Onboarding2 from '../screens/Onboarding/Onboarding2'
import Onboarding3 from '../screens/Onboarding/Onboarding3'

const Stack = createStackNavigator();

const OnboardingStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='onboarding1' component={Onboarding1} options={{headerShown: false}}/>
      <Stack.Screen name='onboarding2' component={Onboarding2} options={{headerShown: false}}/>
      <Stack.Screen name='onboarding3' component={Onboarding3} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default OnboardingStackNavigator;
