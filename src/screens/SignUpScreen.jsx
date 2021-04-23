import React from 'react';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import UserIcon from '../components/UserIcon';
import Button from '../components/Button';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <UserIcon name="user-plus" />
        <Text style={styles.title}>サインアップ</Text>
        <TextInput style={styles.input} value="メールアドレス" />
        <TextInput style={styles.input} value="パスワード" />
        <TextInput style={styles.input} value="パスワード再入力" />
        <Button label="登録" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>登録済みの場合は、</Text>
          <Text style={styles.footerLink}>ログイン</Text>
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
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    paddingVertical: 16,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
  footer: {
    flexDirection: 'row',
  },
});
