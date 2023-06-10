import React, { useState } from 'react';
import { Button, Card, Title, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Favouritelist() {
    const navigation = useNavigation();

    const [items, setItems] = useState([
        { id: 1, title: 'Card 1', quantity: 1 },
        { id: 2, title: 'Card 2', quantity: 1 },
        { id: 3, title: 'Card 3', quantity: 1 },
    ]);



    return (
        <>
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
                                <View style={styles.cartContainer}>
                                    <Button
                                        icon="cart"
                                        mode="contained"
                                        onPress={() => { }}
                                        style={styles.cartButton}
                                    />
                                </View>
                            </Card.Actions>
                        </View>

                        <View style={styles.contentContainer}>
                            <View style={styles.rowContainer}>
                                <Title style={styles.title}>{item.title}</Title>
                                <Text variant="bodyMedium" style={styles.priceText}>
                                    Price : $ {item.quantity * 20} {/* Change the price calculation as needed */}
                                </Text>
                            </View>

                            <View style={styles.buttonContainer}>
                                <Button
                                    icon="heart"
                                    mode="contained"
                                    onPress={() => { }}
                                    style={styles.heartButton}
                                />
                            </View>
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
        height: 90,
        width: 100,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 25,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        color: 'white',
        marginBottom: 5,
        fontSize: 15,
    },
    priceText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 15,
    },
    cardActions: {
        alignItems: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
    },
    cartContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    cartButton: {
        backgroundColor: '#3498db',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    heartButton: {
        backgroundColor: '#ff0000',
        marginLeft: 10,
    },
});
