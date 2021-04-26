import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import LogOutButton from '../components/LogOutButton';

export default function QAScreen(props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.homeContents}>
        <View>
          <Text style={styles.homeContentsTitle}>一問一答</Text>
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
});
