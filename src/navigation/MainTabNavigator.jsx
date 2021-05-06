import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LogOutButton from '../components/LogOutButton';
import HomeScreen from '../screens/HomeScreen';
import QAScreen from '../screens/QAScreen';
import TestScreen from '../screens/TestScreen';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="QA" component={QAScreen} />
      <Tab.Screen name="Test" component={TestScreen} />
    </Tab.Navigator>
  );
}
