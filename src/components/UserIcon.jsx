import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { string } from 'prop-types';

export default function UserIcon(props) {
  const { name } = props;
  return (
    <View style={styles.iconContainer}>
      <Feather name={name} size={24} color="black" />
    </View>
  );
}

UserIcon.propTypes = {
  name: string.isRequired,
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 32,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    top: 8,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
});
