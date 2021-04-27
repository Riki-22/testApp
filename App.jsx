import React from 'react';
import firebase from 'firebase';

import { firebaseConfig } from './env';
import AppNavigator from './src/navigation/AppNavigator';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <AppNavigator />
  );
}
