import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
export default function Notification() {
    const navigation = useNavigation();

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                <Appbar.Content title="Notification" />
                <Appbar.Action onPress={() => navigation.navigate('Profile')} icon='account' />

            </Appbar.Header>
            <ScrollView>
                {/* <Favouritelist /> */}
            </ScrollView>
        </>
    )
}
