import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appBarTitle}>KENAPP</Text>
          <Text style={styles.appbarMenu}>MENU</Text>
        </View>
      </View>

      <View style={styles.contents}>
        <View>
          <Text style={styles.contentsTitle}>達成率</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  appBar: {
    width: '100%',
    height: 80,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {

  },
  appBarTitle: {
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
  contents: {
    alignItems: 'center',
  },
  contentsTitle: {
    fontSize: 20,
    lineHeight: 40,
  },
});
