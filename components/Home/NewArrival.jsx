import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Card, Text, IconButton, ActivityIndicator } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import productsData from '../json/productsData.json';

export default function NewArrival() {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsData.fashion);
        }, 1000);
    }, []);

    const renderProduct = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
                <View style={styles.itemContainer}>
                    <Card style={styles.card}>
                        <Card.Content style={styles.cardContent}>
                            <Card.Cover source={{ uri: item.imagesrc }} style={styles.imageStyle} />
                            <View style={styles.cardContentText}>
                                <IconButton
                                    icon="heart"
                                    iconColor="#FF0000"
                                    size={40}
                                    onPress={() => console.log('Pressed')}
                                    style={styles.cardTitle}
                                />
                            </View>
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
            </TouchableOpacity>
        );
    };

    return (
        <>
            <Text style={styles.title}>New Arrival</Text>

            {products.length > 0 ? (
                <FlatList
                    data={products}
                    style={styles.listview}
                    renderItem={renderProduct}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" />
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        textDecorationStyle: 'solid',
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    listview: {
        marginTop: 20,
    },
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
    cardContentText: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
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
});