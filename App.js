import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigators/BottomTabNavigator';
import UserContext from './contexts/UserContext';
import OnboardingStackNavigator from './navigators/OnboardingStackNavigator';


const App = () => {
  const [user, setUser] = useState("hi");


  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
      <OnboardingStackNavigator />
        {/* {user === null ? <OnboardingStackNavigator /> : <BottomTabNavigator />} */}
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
