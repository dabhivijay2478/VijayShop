import React from 'react';
import { Avatar, Text, Title, Button, Divider } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default function Settingslist() {
    return (
        <>



            <View style={styles.container}>
                <Avatar.Image size={100} source={require('../assets/vijay.jpg')} style={styles.avatarstyle} />
                <Text variant="headlineMedium" style={styles.textStyle} >Vijay Dabhi</Text>
            </View>
            <View style={styles.mainview}>
                <View style={styles.contentContainer}>


                    <View>
                        <Button icon="account" mode="contained" onPress={() => { }} style={styles.buttonstyle} >
                            Profile
                        </Button>
                        <Button icon="home" mode="contained" onPress={() => { }} style={styles.buttonstyle}>
                            Home
                        </Button>
                        <Button icon="heart" mode="contained" onPress={() => { }} style={styles.buttonstyle}>
                            Favourite
                        </Button>
                        <Button icon="pencil" mode="contained" onPress={() => { }} style={styles.buttonstyle}>
                            Orders
                        </Button>
                        <Button icon="bell-badge" mode="contained" onPress={() => { }} style={styles.buttonstyle}>
                            Notification
                        </Button>
                    </View>
                    <Divider theme={{ colors: { primary: 'green' } }} bold style={{ borderColor: "slategray ", borderWidth: 1 }} />
                    <View>
                        <Button icon="logout" mode="contained" onPress={() => { }} style={styles.buttonstyle}>
                            Log Out
                        </Button>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainview: {
        backgroundColor: "slategray",
        borderRadius: 30,
        marginEnd: 10,
        marginStart: 10,
        marginTop: 15,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarstyle: {
        marginStart: 20,
    },
    textStyle: {
        marginStart: 10,
    },
    contentContainer: {

        justifyContent: 'center',
        marginStart: 20,
        marginEnd: 20,
        marginBottom: 10,
        marginTop: 15,
    },

    title: {
        color: 'white',
        marginBottom: 5,
        fontSize: 15,
    },
    buttonstyle: {
        marginBottom: 10,
        marginStart: 25,
        marginTop: 15,
        marginEnd: 20
    }
});
