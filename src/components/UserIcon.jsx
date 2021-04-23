import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { string } from 'prop-types';

export default function UserIcon(props) {
  const { name } = props;
  return (
    <View style={styles.userIcon}>
      <Feather name={name} size={24} color="black" />
    </View>
  );
}

UserIcon.propTypes = {
  name: string.isRequired,
};

const styles = StyleSheet.create({
  userIcon: {
    backgroundColor: 'white',
    borderRadius: 32,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    top: 24,
    left: 136,
  },
});
