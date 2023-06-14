import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Appbar, IconButton, Text, Button } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper';

export default function Successfullorder() {
    const navigation = useNavigation();

    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="SuccessFull Order" />
                <Appbar.Action icon="home" onPress={() => navigation.navigate('Home')} />
            </Appbar.Header>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.content}>
                    <IconButton
                        icon="check"
                        color={MD3Colors.green400}
                        size={200}
                        onPress={() => console.log('Pressed')}
                        style={styles.iconButton}
                    />
                    <Text style={styles.message}>
                        Success! Your order will be delivered to your address within 6 days.

                    </Text>
                    <Text style={styles.emailmessage}>

                        Your Order Details Send in Your Email
                    </Text>
                </View>
                <Button
                    mode="contained"
                    icon='home'
                    onPress={() => navigation.navigate('Home')}
                    style={styles.backtohomeContainer}
                >
                    <Text style={styles.backtohomeText}>Back To Home</Text>

                </Button>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconButton: {
        marginBottom: 20,
    },
    message: {
        fontSize: 18,
        textAlign: 'center',
    },
    backtohomeContainer: {

        margin: 20
    },
    backtohomeText: {
        marginRight: 10,
        color: 'white'
    },
    emailmessage: {
        color: 'black',
        margin: 10,
        fontStyle: 'italic',
        fontSize: 10
    }

});
