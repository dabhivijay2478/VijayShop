import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
export default function Payment() {
    const navigation = useNavigation();

    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Checkout" />
                <Appbar.Action icon="home" onPress={() => navigation.navigate('Home')} />

            </Appbar.Header>

        </>
    );
}
