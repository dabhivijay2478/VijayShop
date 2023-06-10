import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import CartData from './CartData';

export default function Cart() {
    const navigation = useNavigation();
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                <Appbar.Content title="Cart" />


            </Appbar.Header>
            <ScrollView>
                <CartData />
            </ScrollView>
        </>
    );
}
