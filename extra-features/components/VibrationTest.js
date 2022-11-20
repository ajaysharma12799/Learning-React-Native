import React from 'react'
import { View, Text, StyleSheet, Vibration, Platform, Button } from 'react-native';

const VibrationTest = () => {

    const ANDROID_PATTERN_ONE_SECOND_IN_MS = 1000;
    const VIBRATION_PATTERN = [1 * ANDROID_PATTERN_ONE_SECOND_IN_MS, 2 * ANDROID_PATTERN_ONE_SECOND_IN_MS, 3 * ANDROID_PATTERN_ONE_SECOND_IN_MS];

    const handleVibrate = () => {
        Vibration.vibrate(10 * ANDROID_PATTERN_ONE_SECOND_IN_MS);
    }

    const handleVibrationWithPattern = () => {
        Vibration.vibrate(VIBRATION_PATTERN, true);
        /**
         * 
         * Vibrate Mobile with a Pattern :-
         * 
         * 1. Pattern
         * 
         * 2. Repeat Mode (boolean) => true (For Repetion), false (For Non Repeat Vibration)
         * 
         */
    }

    const cancelVibrate = () => {
        Vibration.cancel();
    }

  return (
    <View>
        <Text>Vibration Test</Text>
        <Button
            title='Vibrate Mobile'
            color={'#3944f7'}
            onPress={handleVibrate}
        />
        <Button
            title='Vibrate Mobile With Pattern'
            color={'dodgerblue'}
            onPress={handleVibrationWithPattern}
        />
        <Button
            title='Cancel Vibrate'
            color={'black'}
            onPress={cancelVibrate}
        />
    </View>
  )
}

export default VibrationTest

/** 
 * 
 * Android apps should request the android.permission.VIBRATE 
 * permission by adding 
 * <uses-permission android:name="android.permission.VIBRATE"/> to AndroidManifest.xml.
 * 
*/