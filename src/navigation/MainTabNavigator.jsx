import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import QAScreen from '../screens/QAScreen';
import TestScreen from '../screens/TestScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="QA" component={QAScreen} />
      <Tab.Screen name="Test" component={TestScreen} />
    </Tab.Navigator>
  );
}
