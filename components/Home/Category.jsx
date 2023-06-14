import * as React from 'react';
import { Button, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native'; // Import the navigation hook

import FashionImage from '../assets/fashion.png';
import ElectronicsImage from '../assets/electronics.png';
import MobilesImage from '../assets/Mobile.png';
import ComputersImage from '../assets/Computer.png';

export default function Category() {
    const navigation = useNavigation(); // Initialize the navigation hook

    const data = [
        { id: 1, title: 'fashion', imagesrc: FashionImage },
        { id: 2, title: 'electronics', imagesrc: ElectronicsImage },
        { id: 3, title: 'mobiles', imagesrc: MobilesImage },
        { id: 4, title: 'computers', imagesrc: ComputersImage },
        // ... rest of the categories
    ];

    const handleCategoryPress = (category) => {
        navigation.navigate('CatalogList', { category }); // Navigate to CatalogList screen with the selected category
    };

    const renderItem = ({ item, index }) => {
        return (
            <>
                <TouchableOpacity style={styles.carouselItem} onPress={() => handleCategoryPress(item.title)}>
                    <Avatar.Image
                        size={100}
                        source={item.imagesrc}
                        style={styles.imageStyle}
                    />
                    <Text style={styles.itemCode}>{item.title}</Text>
                </TouchableOpacity>
            </>
        );
    };

    return (
        <>
            <Text style={styles.categoryTitle}>Categories</Text>
            <View style={styles.carouselContainer}>
                <Carousel
                    data={data}
                    renderItem={renderItem}
                    sliderWidth={300}
                    itemWidth={150}
                    layout={'default'}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    categoryTitle: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        textDecorationStyle: 'solid',
        fontSize: 16,
        fontWeight: 'bold',
    },
    carouselContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 10,
    },
    carouselItem: {
        alignItems: 'center',
    },
    imageStyle: {
        borderRadius: 50,
        height: 100,
        width: 100,
    },
    itemCode: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
