import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import LogOutButton from '../components/LogOutButton';
import HomeContents from '../components/HomeContents';

export default function HomeScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <HomeContents />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
