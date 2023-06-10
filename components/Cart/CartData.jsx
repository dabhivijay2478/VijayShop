import React, { useState } from 'react';
import { Button, Card, Title, Text } from 'react-native-paper';
import { View, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CartData() {
    const navigation = useNavigation();

    const [items, setItems] = useState([
        { id: 1, title: 'Card 1', quantity: 1 },
        { id: 2, title: 'Card 2', quantity: 1 },
        { id: 3, title: 'Card 3', quantity: 1 },
    ]);

    const handleIncrease = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrease = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const calculateSubtotal = () => {
        let subtotal = 0;
        items.forEach((item) => {
            const price = item.quantity * 20; // Change the price calculation as needed
            subtotal += price;
        });
        return subtotal;
    };

    return (
        <>
            <View style={styles.totalstyle}>
                <Text variant="headlineSmall" style={styles.subtotalText}>
                    SubTotal: $ {calculateSubtotal()}
                </Text>
                <Button icon="shopping" mode="contained" onPress={() => navigation.navigate('Checkout')}>
                    Buy Now
                </Button>
            </View>

            {items.map((item) => (
                <View style={styles.carouselItem} key={item.id}>
                    <Card style={styles.card}>
                        <View style={styles.container}>
                            <Card.Cover
                                source={{
                                    uri:
                                        'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/379988/03/sv01/fnd/IND/fmt/png/Scorch-Runner-V2-Men',
                                }}
                                style={styles.imageStyle}
                            />

                            <Card.Actions style={styles.cardActions}>
                                <View style={styles.quantityContainer}>
                                    <Button
                                        onPress={() => handleDecrease(item.id)}
                                        mode="contained"
                                        style={styles.quantityButton}
                                        labelStyle={styles.buttonLabel}
                                    >
                                        -
                                    </Button>
                                    <Text style={styles.quantityText}>{item.quantity}</Text>
                                    <Button
                                        onPress={() => handleIncrease(item.id)}
                                        mode="contained"
                                        style={styles.quantityButton}
                                        labelStyle={styles.buttonLabel}
                                    >
                                        +
                                    </Button>
                                </View>

                            </Card.Actions>

                        </View>

                        <View style={styles.contentContainer}>
                            <Title style={styles.title}>{item.title}</Title>
                            <Text variant="bodyMedium" style={styles.title}>
                                Price : $ {item.quantity * 20} {/* Change the price calculation as needed */}
                            </Text>

                        </View>
                        <View>
                            <Button icon="delete" mode="contained" onPress={() => { }}>
                                Delete
                            </Button>
                        </View>
                    </Card>

                </View>
            ))}
        </>
    );
}

const styles = StyleSheet.create({
    carouselItem: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingBottom: 2,
    },
    card: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'black',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageStyle: {
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        height: 50,
        width: 100,
    },
    contentContainer: {
        flex: 1,
        alignSelf: 'auto',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10,
        marginBottom: 10,
    },
    title: {
        color: 'white',
        alignSelf: 'flex-start',
        marginBottom: 5,
        fontSize: 15
    },
    cardActions: {
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#3498db',
    },
    buttonLabel: {
        color: 'white',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 0,
        right: 0,
        marginHorizontal: 4,
        marginRight: 2,
        marginLeft: 2,

    },
    quantityText: {
        fontSize: 20,
        color: 'white',
    },
    totalstyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    subtotalText: {
        marginRight: 10,
    },

});
