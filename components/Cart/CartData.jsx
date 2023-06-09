import React, { useState } from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';

export default function CartData() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <View style={styles.carouselItem}>
            <Card style={styles.card}>
                <View style={styles.container}>

                        <Card.Cover
                        source={{
                            uri:
                                'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/379988/03/sv01/fnd/IND/fmt/png/Scorch-Runner-V2-Men',
                        }}
                        style={styles.imageStyle}
                    />
                    <Card.Content style={styles.contentContainer}>
                        <Title style={styles.title}>Vijay</Title>
                        <Paragraph style={styles.paragraph}>Card content</Paragraph>
                    </Card.Content>
                </View>
                <Card.Actions style={styles.cardActions}>
                    <View style={styles.quantityContainer}>
                        <Button
                            icon="minus"
                            onPress={handleDecrease}
                            mode="contained"
                            style={styles.quantityButton}
                            labelStyle={styles.buttonLabel}
                        >
                            -
                        </Button>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <Button
                            icon="plus"
                            onPress={handleIncrease}
                            mode="contained"
                            style={styles.quantityButton}
                            labelStyle={styles.buttonLabel}
                        >
                            +
                        </Button>
                    </View>
                    {/* <Button
                        mode="contained"
                        style={styles.button}
                        labelStyle={styles.buttonLabel}
                    >
                        Shop Now
                    </Button> */}
                </Card.Actions>
            </Card>
        </View>
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
        height: 100,
        width: 200,
    },
    contentContainer: {
        flex: 1,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: 10,
    },
    title: {
        color: 'white',
    },
    paragraph: {
        color: 'white',
    },
    cardActions: {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
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
        marginHorizontal: 5,
    },
    quantityText: {
        fontSize: 18,
        color: 'white',
    },
});
