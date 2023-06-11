import * as React from 'react';
import { Button, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import NikeImage from '../assets/nike.png';
import PumaImage from '../assets/puma.png';
import ReebokImage from '../assets/reebok.png';

export default function Brand() {
    const data = [
        { id: 1, title: 'Nike', imagesrc: NikeImage },
        { id: 2, title: 'Puma', imagesrc: PumaImage },
        { id: 3, title: 'reebok', imagesrc: ReebokImage },
        // ... rest of the data
    ];

    const renderItem = ({ item, index }) => {
        return (
            <>
                <View style={styles.carouselItem}>
                    <Avatar.Image
                        size={100}
                        source={item.imagesrc}
                        style={styles.imageStyle}
                    />
                    <Text style={styles.itemCode}>{item.title}</Text>
                </View>
            </>
        );
    };

    return (
        <>
            <Text style={{
                paddingHorizontal: 15, paddingVertical: 15, textDecorationStyle: "solid", fontSize: 16,
                fontWeight: 'bold',
            }} >Brand</Text>
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
        marginLeft: 5,
        marginRight: 5
    },
    imageStyle: {
        borderRadius: 50,
        height: 100,
        width: 100,
    },
});
