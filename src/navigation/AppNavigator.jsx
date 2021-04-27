import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
