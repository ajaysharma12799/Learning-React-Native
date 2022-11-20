import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview';

const dimension = Dimensions.get('screen');

const WebViewTest = () => {
  return (
    <View style={styles.container}>
        <WebView 
            source={{ uri: 'https://www.codingjungle.in/' }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 5,
        width: dimension.width,
    }
});

export default WebViewTest