import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStackNavigator from './HomeStackNavigator';
import TargetStackNavigator from './TargetStackNavigator';
import LeaderboardStackNavigator from './LeaderboardStackNavigator';
import FriendsStackNavigator from './FriendsStackNavigator';
import SettingsStackNavigator from './SettingsStackNavigator';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => <Icon name='home' size={25} />
        }}
      />
      <Tab.Screen
        name='Target'
        component={TargetStackNavigator}
        options={{
          tabBarIcon: () => <Icon name='bullseye' size={25} />
        }}
      />
      <Tab.Screen
        name='Leaderboard'
        component={LeaderboardStackNavigator}
        options={{
          tabBarIcon: () => <Icon name='chart-bar' size={25} />
        }}
      />
      <Tab.Screen
        name='Friends'
        component={FriendsStackNavigator}
        options={{
          tabBarIcon: () => <Icon name='user-friends' size={25} />
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsStackNavigator}
        options={{
          tabBarIcon: () => <Icon name='cog' size={25} />
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
