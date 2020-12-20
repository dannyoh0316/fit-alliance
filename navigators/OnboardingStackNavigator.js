import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding1 from '../screens/Onboarding/Onboarding1';
import Onboarding2 from '../screens/Onboarding/Onboarding2';
import Onboarding3 from '../screens/Onboarding/Onboarding3';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/LoginScreen/RegisterScreen'
import BottomTabNavigator from './BottomTabNavigator';
import Settings from '../screens/Settings/SettingsScreen'

const Stack = createStackNavigator();

const OnboardingStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='login' component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name='register' component={RegisterScreen} options={{headerShown: false}} />
      <Stack.Screen name='Onboarding1' component={Onboarding1} options={{headerShown: false}} />
      <Stack.Screen name='Onboarding2' component={Onboarding2} options={{headerShown: false}} />
      <Stack.Screen name='Onboarding3' component={Onboarding3} options={{headerShown: false}} />
      <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator} options={{headerShown: false}} />
      <Stack.Screen name='settings' component={Settings} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default OnboardingStackNavigator;
