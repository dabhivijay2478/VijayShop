import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Appbar, Card, Text, RadioButton, Paragraph, IconButton, MD3Colors, Chip } from 'react-native-paper';

import MasterCardImage from '../assets/mastercard.png';
import GooglePayImage from '../assets/google.png';

export default function Payment({ route }) {
    const navigation = useNavigation();
    const { item } = route.params;
    const [checked, setChecked] = useState('Mastercard');
    const [quantity, setQuantity] = useState(1);
    const [Price, setPrice] = useState(item.price);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    const handleContinue = () => {
        navigation.navigate('PaymentDetails', {
            paymentMethod: checked,
            productDetails: item,
            totalPrice: quantity * Price
        });
    };

    return (
        <>
            <Appbar.Header>
                <Appbar.Content title="Payment" />
                <Appbar.Action icon="home" onPress={() => navigation.navigate('Home')} />
            </Appbar.Header>
            <ScrollView>
                <View>
                    <View style={styles.itemContainer}>
                        <Card style={styles.card}>
                            <Card.Content style={styles.cardContent}>
                                <Card.Cover source={{ uri: item.imagesrc }} style={styles.imageStyle} />

                                <View style={styles.productDetailsContainer}>
                                    <Text style={styles.brandName}>{item.brand}</Text>
                                    <Text style={styles.itemName}>{item.itemName}</Text>
                                    <Text style={styles.price}>$ {item.price}</Text>
                                    <View style={styles.priceRatingContainer}>
                                        <Text style={styles.ratings}>Ratings: {item.ratings}</Text>
                                    </View>
                                </View>
                            </Card.Content>
                        </Card>
                    </View>

                    <View style={styles.ordercontainer}>
                        <Text style={styles.ordertext}>Select quantity</Text>
                        <IconButton
                            icon="minus"
                            color={MD3Colors.error50}
                            size={20}
                            onPress={handleDecrease}
                            mode="contained"
                            labelStyle={styles.buttonLabel}
                        />
                        <Text style={styles.ordertext}> {quantity}</Text>
                        <IconButton
                            icon="plus"
                            color={MD3Colors.error50}
                            size={20}
                            onPress={handleIncrease}
                            mode="contained"
                            labelStyle={styles.buttonLabel}
                        />
                    </View>
                    <View style={styles.pricecontainer}>
                        <Text style={styles.pricetext}>Total Price : {quantity * Price}</Text>

                    </View>
                    <View style={styles.addresscontainer}>
                        <Paragraph style={styles.addressText}>Address....</Paragraph>
                    </View>

                    <View style={styles.paymentCardContainer}>
                        <View style={styles.paymentCard}>
                            <View style={styles.paymentCardImageContainer}>
                                <Image size={50} source={MasterCardImage} style={styles.paymentCardImage} />
                            </View>

                            <View style={styles.paymentCardTextContainer}>
                                <Text style={styles.paymentCardText}>Master Card</Text>
                            </View>

                            <View style={styles.checkboxContainer}>
                                <RadioButton
                                    value="Mastercard"
                                    status={checked === 'Mastercard' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Mastercard')}
                                    color="teal"
                                    style={styles.checkbox}
                                />
                            </View>
                        </View>

                        <View style={styles.paymentCard}>
                            <View style={styles.paymentCardImageContainer}>
                                <Image size={50} source={GooglePayImage} style={styles.paymentCardImage} />
                            </View>

                            <View style={styles.paymentCardTextContainer}>
                                <Text style={styles.paymentCardText}>Google Pay</Text>
                            </View>

                            <View style={styles.checkboxContainer}>
                                <RadioButton
                                    value="Googlepay"
                                    status={checked === 'Googlepay' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('Googlepay')}
                                    color="teal"
                                    style={styles.checkbox}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.continuecontainer}>
                        <Chip icon="credit-card" onPress={handleContinue} style={styles.continuetext} textStyle={styles.continueinnertext}>continue</Chip>
                    </View>





                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    card: {
        width: 400,
        elevation: 3,
        borderRadius: 5,
        borderColor: 'teal',
        borderWidth: 3,
    },
    imageStyle: {
        height: 200,
        width: 200,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderRadius: 5,
        borderColor: 'steelblue',
        borderWidth: 2,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    productDetailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: 0,
        right: 0,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    brandName: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    itemName: {
        fontSize: 16,
        marginBottom: 5,
    },
    priceRatingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 0,
        right: 0,
    },
    price: {
        fontSize: 14,
        color: '#888',
    },
    ratings: {
        fontSize: 14,
        color: '#888',
    },
    paymentCardContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    paymentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'teal',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        backgroundColor: 'white',
        elevation: 3,
        margin: 10,
    },
    paymentCardImageContainer: {
        marginRight: 10,
    },
    paymentCardImage: {
        width: 30,
        height: 30,
    },
    paymentCardTextContainer: {
        marginRight: 10,
    },
    paymentCardText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    checkboxContainer: {
        marginLeft: 'auto',
    },
    checkbox: {
        marginLeft: 'auto',
    },
    addresscontainer: {
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'teal',
        borderRadius: 5,
        margin: 15,
    },
    addressText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    ordercontainer: {
        marginVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'teal',
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center'
    },
    ordertext: {
        fontSize: 25,
        color: 'white',
        flexDirection: 'row'
    },
    pricetext: {
        flexDirection: 'row',
        color: 'white',

    },
    pricecontainer: {
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'teal',
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center'
    },
    continuecontainer: {
        margin: 15,
        marginEnd: 50,
        marginStart: 50,
        padding: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignContent: 'center',
    },
    continuetext: {
        margin: 10,
        justifyContent: 'center',
        marginStart: 60,
        marginEnd: 50,
        backgroundColor: 'springgreen'
    },
    continueinnertext: {
        margin: 10,
        justifyContent: 'center',
        marginStart: 40,
        marginEnd: 50,
        alignSelf: 'center',
        alignContent: 'center',
        color: 'black',
        fontSize: 20


    }
});
