import React, { useEffect, useState } from 'react';
import productsData from '../json/productsData.json';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Card, Text, IconButton, ActivityIndicator, Title, Paragraph, Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function CatalogList({ route }) {
    const navigation = useNavigation();
    const { category } = route.params;
    const [products, setProducts] = useState([]);
    const [selectCategory, setSelectCategory] = useState(category);

    useEffect(() => {
        const categoryProducts = productsData[category];
        setSelectCategory(category);

        setTimeout(() => {
            if (categoryProducts) {
                setProducts(categoryProducts);
            }
        }, 1000);
    }, [category]);


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
                                    color="#FF0000"
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
        </>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        marginBottom: 10,
        margin: 5
    },
    card: {
        width: '80%',
        padding: 20,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 16,
    },
    cardContentText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    cardTitle: {
        alignSelf: 'flex-end',
    },
    productDetailsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    brandName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    itemName: {
        fontSize: 14,
        marginBottom: 4,
    },
    price: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    priceRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    ratings: {
        fontSize: 14,
        marginLeft: 4,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        textAlign: 'center',
    },
    listview: {
        flex: 1,
    },
});
