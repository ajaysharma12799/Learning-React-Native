import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        style={styles.button}
    >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3944f7',
        width: '100%',
        borderRadius: 5,
        marginVertical: 5,
        padding: 10,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
    }
});

export default Button