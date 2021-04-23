import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>KENAPP</Text>
        {/* <Text style={styles.appbarMenu}>MENU</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 80,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {

  },
  appbarTitle: {
    position: 'absolute',
    left: 19,
    bottom: 8,
    fontSize: 24,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  appbarMenu: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});
