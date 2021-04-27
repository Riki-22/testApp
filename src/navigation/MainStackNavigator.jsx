import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';
import MainTabNavigator from './MainTabNavigator';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="LogIn"
      screenOptions={{
        headerStyle: { backgroundColor: '#467FD3' },
        headerTitleStyle: { color: '#FFFFFF' },
        headerTitle: 'KENAPP',
        headerTintColor: '#ffffff',
        headerBackTitle: 'Back',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Stack.Screen name="MainTab" component={MainTabNavigator} />
      <Stack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
}
