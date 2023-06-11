import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
export default function ProductCard() {
    const data = [
        { id: 1, title: 'Card 1' },
        { id: 2, title: 'Card 2' },
        { id: 3, title: 'Card 3' },
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={styles.carouselItem} >
                <Card style={styles.card}>
                    <View style={styles.container}>
                        <Card.Content style={styles.contentContainer}>
                            <Title style={styles.title}>{item.title}</Title>
                            <Paragraph style={styles.paragraph}>Card content</Paragraph>
                        </Card.Content>
                        <Card.Cover
                            source={{ uri: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/379988/03/sv01/fnd/IND/fmt/png/Scorch-Runner-V2-Men' }}
                            style={styles.imageStyle}
                        />
                    </View>
                    <Card.Actions style={styles.cardActions}>
                        <Button
                            mode="contained"
                            style={styles.button}
                            labelStyle={styles.buttonLabel}
                        >
                            Shop Now
                        </Button>
                    </Card.Actions>
                </Card>
            </View>
        );
    };

    return (
        <View style={styles.carouselContainer} >
            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={100}
                itemWidth={400}
                layout={'default'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    carouselItem: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingBottom: 2,
    },
    card: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "black",

    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    imageStyle: {
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        height: 100,
        width: 200,
    },
    contentContainer: {
        flex: 1,
        alignSelf: "flex-start",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 10,
    },
    title: {
        color: "white",
    },
    paragraph: {
        color: "white",
    },
    cardActions: {
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
    },
    button: {
        backgroundColor: '#3498db',
    },
    buttonLabel: {
        color: 'white',
    },
});