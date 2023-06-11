import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Order() {
    const navigation = useNavigation();

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                <Appbar.Content title="Order" />
                <Appbar.Action onPress={() => navigation.navigate('Settings')} icon='cog' />

            </Appbar.Header>
        </>
    );
}
