import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageTest = () => {
    const [data, setData] = useState(null);
    
    const storeDataInAsyncStorage = async () => {
        await AsyncStorage.setItem('email', 'ajaysharma12799@gmail.com');
    }

    const getDataInAsyncStoage = async () => {
        const data = await AsyncStorage.getItem('email');
        console.log(data);
        setData(data);
    }

    useEffect(() => {
        storeDataInAsyncStorage();
    }, []);

    useEffect(() => {
        getDataInAsyncStoage();
    }, []);

  return (
    <View>
        <Text>AsyncStorage Test</Text>
        <View>
            { data && <Text>Data Present in AsyncStorage is: { data }</Text> }
        </View>
    </View>
  )
}

export default AsyncStorageTest

/** 
 * 
 * getItem => Get Specific Item associated with Key Passed
 * 
 * setItem => Set Item into AsyncStorage
 * 
 * removeItem => Remove Item associated with Key Passed
 * 
 * clear => Clear AsyncStorage
 * 
 * getAllKeys => Return All Keys in AsyncStorage
 * 
*/