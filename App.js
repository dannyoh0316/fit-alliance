import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './navigators/BottomTabNavigator';
import UserContext from './contexts/UserContext';
import OnboardingStackNavigator from './navigators/OnboardingStackNavigator';
import { Provider } from 'react-redux'


const App = () => {
  const [user, setUser] = useState("hi");

  return (
    <Provider store={store}>
      <UserContext.Provider value={user}>
        <NavigationContainer>
          {user === null ? <OnboardingStackNavigator /> : <BottomTabNavigator />}
        </NavigationContainer>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
