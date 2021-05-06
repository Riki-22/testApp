import React from 'react';
import { View, StyleSheet } from 'react-native';

import HomeContents from '../components/HomeContents';

export default function HomeScreen() {
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
