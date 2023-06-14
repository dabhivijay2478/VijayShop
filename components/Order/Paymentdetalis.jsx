import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, StyleSheet, Image, Modal } from 'react-native';
import { Appbar, Card, Text, TextInput, Divider, Button, Dialog, Portal, Provider, ActivityIndicator, MD2Colors } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import MasterCardImage from '../assets/mastercard.png';
import GooglePayImage from '../assets/google.png';

export default function PaymentDetails(props) {
    const navigation = useNavigation();
    const { paymentMethod, productDetails, totalPrice } = props.route.params;
    const [masterCardNumber, setMasterCardNumber] = useState('');
    const [googlePayNumber, setGooglePayNumber] = useState('');
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false); // Add loading state

    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShowDatePicker(true);
        setMode(currentMode);
    };

    const verifyOTP = () => {
        setLoading(true);


        setTimeout(() => {
            setLoading(false);
            navigation.navigate('Successfullorder');
        }, 2000);
    };

    return (
        <Provider>
            <>
                <Appbar.Header>
                    <Appbar.Content title="Payment Details" />
                    <Appbar.Action icon="home" onPress={() => navigation.navigate('Home')} />
                </Appbar.Header>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Payment Method: {paymentMethod}</Text>
                        <Image source={{ uri: productDetails.imagesrc }} style={styles.image} />
                        <Text style={styles.subHeading}>Product Details: {productDetails.itemName}</Text>
                        <Text style={styles.subHeading}>Product Brand: {productDetails.brand}</Text>
                        <Text style={styles.subHeading}>Total Price: {totalPrice}</Text>
                    </View>
                    <Divider theme={{ colors: { primary: 'green' } }} bold style={styles.divider} />
                    <View style={styles.textinputcontainer}>
                        {paymentMethod === 'Mastercard' && (
                            <View>
                                <TextInput
                                    style={styles.textInput}
                                    mode="outlined"
                                    label="Enter MasterCard Name"
                                    placeholder="Your MasterCard Name"
                                    right={<TextInput.Icon name="numeric" />}
                                />
                                <TextInput
                                    style={styles.textInput}
                                    mode="outlined"
                                    label="Enter MasterCard Number"
                                    placeholder="Your MasterCard Number"
                                    value={masterCardNumber}
                                    onChangeText={(text) => setMasterCardNumber(text)}
                                    right={<TextInput.Icon name="numeric" />}
                                />
                                <TextInput
                                    style={styles.textInput}
                                    mode="outlined"
                                    label="CVV"
                                    placeholder="Your CVV"
                                    right={<TextInput.Icon name="numeric" />}
                                />
                                <View style={styles.datePickerContainer}>
                                    <Text style={styles.datePickerLabel}>Select Expiry Date:</Text>
                                    <View style={styles.dateButtonContainer}>
                                        <Button mode="outlined" onPress={() => showMode('date')}>
                                            Select Expiry Date
                                        </Button>
                                    </View>
                                    <Text style={styles.datePickerValue}>{date.toDateString()}</Text>

                                    {showDatePicker && (
                                        <DateTimePicker
                                            value={date}
                                            mode={mode}
                                            is24Hour={true}
                                            display="spinner"
                                            onChange={onChangeDate}
                                        />
                                    )}
                                </View>
                                <View style={styles.buttonContainer}>
                                    <Button mode="contained" onPress={showDialog}>
                                        Send OTP
                                    </Button>
                                </View>
                            </View>
                        )}
                        {paymentMethod === 'Googlepay' && (
                            <View>

                                <TextInput
                                    style={styles.textInput}
                                    mode="outlined"
                                    label="Enter Google Pay Number"
                                    placeholder="Your Google Pay Number"
                                    value={googlePayNumber}
                                    onChangeText={(text) => setGooglePayNumber(text)}
                                    right={<TextInput.Icon name="numeric" />}
                                />
                                <View style={styles.buttonContainer}>
                                    <Button mode="contained" onPress={showDialog}>
                                        Send OTP
                                    </Button>
                                </View>
                            </View>
                        )}
                    </View>
                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog}>
                            <Dialog.Title>Enter The OTP</Dialog.Title>
                            <Dialog.Content>
                                <TextInput
                                    style={styles.textInput}
                                    mode="outlined"
                                    label="Enter OTP"
                                    placeholder="OTP"
                                    // value={googlePayNumber}
                                    // onChangeText={(text) => setGooglePayNumber(text)}
                                    right={<TextInput.Icon name="numeric" />}
                                />
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={verifyOTP}>
                                    <Text>Verify</Text>
                                </Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                    <Modal visible={loading} transparent={true} onRequestClose={() => { }}>
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator animating={true} color={MD2Colors.red800} />
                        </View>
                    </Modal>
                </ScrollView>
            </>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subHeading: {
        fontSize: 16,
        marginBottom: 10,
        color: '#888',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10,
        borderRadius: 20,
        borderColor: 'slategray',
        borderWidth: 2,
        alignSelf: 'center',
    },
    divider: {
        borderColor: 'darkgray',
        borderWidth: 1,
        margin: 20,
    },
    textInput: {
        marginBottom: 20,
    },
    textinputcontainer: {
        margin: 20,
    },
    datePickerContainer: {
        marginTop: 10,
        marginBottom: 20,
    },
    datePickerLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    datePickerValue: {
        fontSize: 16,
        marginBottom: 5,
    },
    dateButtonContainer: {
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    buttonContainer: {
        marginTop: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
