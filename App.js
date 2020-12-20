import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigators/BottomTabNavigator';
import UserContext from './contexts/UserContext';
import OnboardingStackNavigator from './navigators/OnboardingStackNavigator';


const App = () => {
  const [user, setUser] = useState(null);


  return (
    <UserContext.Provider value={user}>
      <NavigationContainer>
        {user === null ? <OnboardingStackNavigator /> : <BottomTabNavigator />}
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
