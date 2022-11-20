import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { useState } from 'react';
import WebViewTest from './components/WebViewTest';
import AsyncStorageTest from './components/AsyncStorageTest';
import VibrationTest from './components/VibrationTest';

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <Text>This Application is For Learning Extra Features</Text>
      {/* <WebViewTest /> */}
      {/* <AsyncStorageTest /> */}
      <VibrationTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
