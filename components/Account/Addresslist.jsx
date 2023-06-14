import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Appbar, Card, IconButton, MD3Colors, FAB, Dialog, Portal, Button, Provider, Text, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Addresslist() {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
    const [addressDetails, setAddressDetails] = useState({ address: '', city: '', pincode: '' });

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    const handleAddressInputChange = (value) => {
        setAddressDetails({ ...addressDetails, address: value });
    };

    const handleCityInputChange = (value) => {
        setAddressDetails({ ...addressDetails, city: value });
    };

    const handlePincodeInputChange = (value) => {
        setAddressDetails({ ...addressDetails, pincode: value });
    };

    const handleAddAddress = () => {
        // Logic to handle adding the address details
        // You can store the address details in an array or perform any other required actions
        console.log(addressDetails);
        // Reset the address details after adding
        setAddressDetails({ address: '', city: '', pincode: '' });
        // Hide the dialog
        hideDialog();
    };

    const addresses = [
        {
            id: 1,
            title: 'First address',
        },
        {
            id: 2,
            title: 'Second address',
        },
        {
            id: 3,
            title: 'Third address',
        },
    ];

    return (
        <Provider>
            <Appbar.Header>
                <Appbar.Content title="Address List" />
                <Appbar.Action icon="home" onPress={() => navigation.navigate('Home')} />
            </Appbar.Header>
            <ScrollView>
                {addresses.map(address => (
                    <View key={address.id}>
                        <Card style={styles.card}>
                            <Card.Actions>
                                <IconButton
                                    icon="close"
                                    iconColor={MD3Colors.error50}
                                    size={20}
                                    onPress={() => console.log('Pressed')}
                                />
                            </Card.Actions>
                            <Card.Content>
                                <Card.Title title={address.title} />
                                {addressDetails.address && (
                                    <Text>{addressDetails.address}</Text>
                                )}
                                {addressDetails.city && (
                                    <Text>{addressDetails.city}</Text>
                                )}
                                {addressDetails.pincode && (
                                    <Text>{addressDetails.pincode}</Text>
                                )}
                            </Card.Content>
                        </Card>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.fabContainer}>
                <FAB
                    icon="plus"
                    style={styles.fab}
                    onPress={showDialog}
                />
            </View>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Add New Address</Dialog.Title>
                    <Dialog.Content>
                        <View>
                            <TextInput
                                mode="outlined"
                                label="Enter Address"
                                placeholder="Your Address"
                                value={addressDetails.address}
                                onChangeText={handleAddressInputChange}
                                right={<TextInput.Icon icon="map-marker" />}
                                style={styles.cardInputStyle}
                            />
                            <TextInput
                                mode="outlined"
                                label="Enter City"
                                placeholder="Your City"
                                value={addressDetails.city}
                                onChangeText={handleCityInputChange}
                                right={<TextInput.Icon icon="city" />}
                                style={styles.cardInputStyle}
                            />
                            <TextInput
                                mode="outlined"
                                label="Enter Pincode"
                                placeholder="Your Pincode"
                                value={addressDetails.pincode}
                                onChangeText={handlePincodeInputChange}
                                right={<TextInput.Icon icon="google-maps" />}
                                style={styles.cardInputStyle}
                            />
                        </View>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={handleAddAddress}>Done</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </Provider>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 20,
        borderRadius: 10,
        borderColor: 'red',
        borderWidth: 2,
    },
    fabContainer: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        margin: 20,
    },
    fab: {
        backgroundColor: '#25D366', // Green color similar to WhatsApp
    },
    cardInputStyle: {
        marginBottom: 10,
    },
});
