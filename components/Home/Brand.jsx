import * as React from 'react';
import { Button, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function Brand() {
    const data = [
        { id: 1, title: 'Card 1' },
        { id: 2, title: 'Card 2' },
        { id: 3, title: 'Card 3' },
        { id: 4, title: 'Card 3' },
        { id: 5, title: 'Card 3' },
        { id: 6, title: 'Card 3' },
        { id: 7, title: 'Card 3' },


    ];

    const renderItem = ({ item }) => {
        return (
            <>

                <View style={styles.carouselItem}>
                    <Avatar.Image
                        size={100}
                        source={require('../assets/puma.png')}
                        style={styles.imageStyle}
                    />
                </View>
            </>
        );
    };

    return (
        <>
            <Text style={{ paddingHorizontal: 15, paddingVertical: 15, textDecorationStyle: "solid" }} >Brand</Text>
            <View style={styles.carouselContainer}>

                <Carousel
                    data={data}
                    renderItem={renderItem}
                    sliderWidth={100}
                    itemWidth={100}
                    layout={'default'}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    carouselContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    carouselItem: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingBottom: 2,
    },
    imageStyle: {
        borderRadius: 50, // Set to half the width and height of the image
    },
});
