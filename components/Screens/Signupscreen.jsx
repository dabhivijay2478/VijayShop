import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper';
const LeftContent = props => <Avatar.Icon {...props} icon="account" />
export default function Signupscreen() {
    const navigation = useNavigation();

    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Sign Up" />
                <Appbar.Action icon='home' onPress={() => navigation.navigate('Home')} />
            </Appbar.Header>
            <ScrollView>
                <View style={styles.maincardview}>


                    <View style={styles.cardview} >

                        <Card>
                            <Card.Title title="Sign Up" subtitle="Create Your Account" left={LeftContent} />
                            <Card.Content style={styles.cardcontentstyle} >
                                <TextInput
                                    mode="outlined"
                                    label="Enter Email"
                                    placeholder="Your Email"
                                    right={<TextInput.Icon icon="email" />}
                                    style={styles.cardinputstyle}
                                />
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
                                <TextInput
                                    mode="outlined"
                                    label="Confirm Password"
                                    placeholder="Re-Enter Password"
                                    secureTextEntry
                                    right={<TextInput.Icon icon="eye" />}
                                    style={styles.cardinputstyle}

                                />
                                <TextInput
                                    mode="outlined"
                                    label="Enter Mobile No"
                                    placeholder="Your Mobile No"
                                    secureTextEntry
                                    right={<TextInput.Icon icon="phone" />}
                                    style={styles.cardinputstyle}

                                />
                                <TextInput
                                    mode="outlined"
                                    label="Enter Address"
                                    placeholder="Your Address"
                                    secureTextEntry
                                    right={<TextInput.Icon icon="map-marker" />}
                                    style={styles.cardinputstyle}

                                />
                                <TextInput
                                    mode="outlined"
                                    label="Enter City"
                                    placeholder="Your City"
                                    secureTextEntry
                                    right={<TextInput.Icon icon="city" />}
                                    style={styles.cardinputstyle}

                                />
                                <TextInput
                                    mode="outlined"
                                    label="Enter Pincode"
                                    placeholder="Your Pincode"
                                    secureTextEntry
                                    right={<TextInput.Icon icon="google-maps" />}
                                    style={styles.cardinputstyle}

                                />
                            </Card.Content>
                            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
                            <Card.Actions style={styles.cardactionstyle} >
                                <Button style={styles.actionbutton} labelStyle={styles.buttonLabel}>Registration</Button>
                            </Card.Actions>
                            <View style={styles.registerContainer}>
                                <Text variant="titleMedium">You already Registered?</Text>
                                <Text variant="titleMedium" style={styles.signUpText} onPress={() => navigation.navigate('Login')}>Login</Text>
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
        marginTop: 10,


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