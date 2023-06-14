import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Card, Text, IconButton, ActivityIndicator, Snackbar, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import productsData from '../json/productsData.json';

export default function CatalogList({ route }) {
    const navigation = useNavigation();
    const { category } = route.params;
    const [products, setProducts] = useState([]);
    const [selectCategory, setSelectCategory] = useState(category);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setSelectCategory(category);
        setProducts(productsData[category]);
    }, [category]);

    const handleAddToFavorites = () => {
        setVisible(true);
    };

    const onDismissSnackBar = () => {
        setVisible(false);
        setTimeout(() => {
            setVisible(false);
        }, 2000);
    };

    const renderProduct = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
                <View style={styles.itemContainer}>
                    <Card style={styles.card}>
                        <Card.Content style={styles.cardContent}>
                            <View style={styles.imageContainer}>
                                <Card.Cover source={{ uri: item.imagesrc }} style={styles.imageStyle} />
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
                        <IconButton
                            icon="heart"
                            color="#FF0000"
                            size={30}
                            onPress={handleAddToFavorites}
                            style={styles.heartButton}
                        />
                    </Card>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                <Appbar.Content title="Catalogue List" />
            </Appbar.Header>
            <Text style={styles.title}>Select Category: {selectCategory}</Text>

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
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
            >
                Item added to favorites list!
            </Snackbar>
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
        width: '90%',
        elevation: 3,
        borderRadius: 5,
        borderColor: 'teal',
        borderWidth: 3,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    imageContainer: {
        position: 'relative',
    },
    imageStyle: {
        height: 100,
        width: 100,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderRadius: 5,
        borderColor: 'steelblue',
        borderWidth: 2,
    },
    productDetailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    heartButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        alignSelf: 'flex-end',
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
