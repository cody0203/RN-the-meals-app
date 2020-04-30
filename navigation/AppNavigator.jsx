import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import * as Navigators from './MeailsNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigators.MainNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
