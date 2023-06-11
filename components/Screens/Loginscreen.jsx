import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="account" />
export default function Loginscreen() {
    const navigation = useNavigation();

    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Login" />
                <Appbar.Action icon='home' onPress={() => navigation.navigate('Home')} />
            </Appbar.Header>
            <ScrollView>
                <View style={styles.maincardview}>


                    <View style={styles.cardview} >

                        <Card>
                            <Card.Title title="Login" subtitle="Login with Your Credentials" left={LeftContent} />
                            <Card.Content style={styles.cardcontentstyle} >
                                <TextInput
                                    mode="outlined"
                                    label="Enter Username"
                                    placeholder="Your Username"
                                    right={<TextInput.Icon icon="account" />}
                                    style={styles.cardinputstyle}
                                />
                                <TextInput
                                    mode="outlined"
                                    label="Password"
                                    placeholder="Your Password"
                                    secureTextEntry
                                    right={<TextInput.Icon icon="eye" />}
                                    style={styles.cardinputstyle}

                                />
                            </Card.Content>
                            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                            <Card.Actions style={styles.cardactionstyle} >
                                <Button style={styles.actionbutton} labelStyle={styles.buttonLabel}>Login</Button>
                            </Card.Actions>
                            <View style={styles.registerContainer}>
                                <Text variant="titleMedium">You Not Registered?</Text>
                                <Text variant="titleMedium" style={styles.signUpText} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
                            </View>


                        </Card>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    maincardview: {
        justifyContent: 'center',
        paddingVertical: 10,
        marginTop: 110,


    },
    cardview: {
        padding: 15,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10,
        borderColor: 'steelblue',
        borderWidth: 2,
        margin: 10,
        shadowColor: 'steelblue',
        shadowOpacity: 10,
        shadowOffset: 10,
        shadowRadius: 10,
        justifyContent: 'center'
    },
    cardcontentstyle: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 10,

    },
    cardinputstyle: {
        margin: 5,
        marginBottom: 2,
        marginTop: 10
    },
    cardactionstyle: {
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    actionbutton: {
        backgroundColor: '#00fa9a',
        color: 'white'
    },
    buttonLabel: {
        color: 'black',
    },
    registerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        margin: 15,
        alignSelf: 'center'
    },
    signUpText: {
        fontWeight: 'bold',
        marginLeft: 5,
        color: 'steelblue',
        textDecorationLine: 'underline',

    },
})