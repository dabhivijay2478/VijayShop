import React from 'react'
import { Avatar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function Settingslist() {
    return (
        <>
            <Avatar.Image size={100} source={require('../assets/vijay.jpg')} style={styles.avatarstyle} />
        </>
    )
}
const styles = StyleSheet.create({
    avatarstyle: {
        marginStart: 20,
        // borderColor: 'springgreen',
        // borderStyle: 'solid',
        // borderWidth: 5
    }
})
