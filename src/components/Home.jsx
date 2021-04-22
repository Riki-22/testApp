import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.homeContents}>
      <View>
        <Text style={styles.homeContentsTitle}>達成率</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContents: {
    alignItems: 'center',
  },
  homeContentsTitle: {
    fontSize: 20,
    lineHeight: 40,
  },
});
