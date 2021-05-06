import { useState } from 'react';
import * as SQLite from 'expo-sqlite';
import { FileSystem } from 'expo-file-system';
import { Asset } from 'expo-asset';

async function openDatabase() {
  if (!(await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}SQLite`)).exists) {
    await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`);
  }
  await FileSystem.downloadAsync(
    // eslint-disable-next-line global-require
    Asset.fromModule(require('../../assets/DB/test.db')).uri,
    `${FileSystem.documentDirectory}SQLite/test.db`,
  );
  return SQLite.openDatabase('test.db');
}
const db = openDatabase();
const [items, setItems] = useState([]);
db.transaction(
  (tx) => {
    tx.executeSql(
      'select * from question;',
      [],
      (_, resultSet) => {
        // SUCCESS
        console.log('success');
        setItems(resultSet);
      },
      () => {
        console.log('fail');

        return false; // 何もしない
      }, // 失敗時のコールバック関数
    );
  },
);
console.log(items);
