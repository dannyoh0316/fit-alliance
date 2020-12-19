import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeStackNavigator from './HomeStackNavigator';
import TargetStackNavigator from './TargetStackNavigator';
import LeaderboardStackNavigator from './LeaderboardStackNavigator';
import FriendsStackNavigator from './FriendsStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'orange',
        activeBackgroundColor: 'orange',
        inactiveBackgroundColor: '#1e110d',
      }}>
      <Tab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => <Image style={{width: 25, height: 25}} source={require('./../assets/home.png')} />,
          showLabel: false,
        }}
      />
      <Tab.Screen
        name='Target'
        component={TargetStackNavigator}
        options={{
          tabBarIcon: () => <Image style={{width: 25, height: 25}} source={require('./../assets/target.png')} />
        }}
      />
      <Tab.Screen
        name='Leaderboard'
        component={LeaderboardStackNavigator}
        options={{
          tabBarIcon: () => <Image style={{width: 25, height: 25}} source={require('./../assets/leaderboard.png')} />
        }}
      />
      <Tab.Screen
        name='Friends'
        component={FriendsStackNavigator}
        options={{
          tabBarIcon: () => <Image style={{width: 30, height: 20}} source={require('./../assets/friends.png')} />
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsStackNavigator}
        options={{
          tabBarIcon: () => <Image style={{width: 25, height: 25}} source={require('./../assets/settings.png')} />
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
