import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { IconButton, MD3Colors } from 'react-native-paper';
export default class NewArrival extends Component {
    render() {
        const products = [
            { brand: 'nike', itemName: 'nike 1', price: 50, ratings: 4.5, imagesrc: require('../assets/nike.png') },
            { brand: 'nike', itemName: 'nike 2', price: 50, ratings: 4.5, imagesrc: require('../assets/puma.png') },
            { brand: 'nike', itemName: 'nike 3', price: 50, ratings: 5, imagesrc: require('../assets/nike.png') },
            { brand: 'puma', itemName: 'puma 1', price: 50, ratings: 5, imagesrc: require('../assets/nike.png') },
            { brand: 'puma', itemName: 'puma 2', price: 50, ratings: 5, imagesrc: require('../assets/nike.png') },
            { brand: 'puma', itemName: 'puma 3', price: 50, ratings: 4, imagesrc: require('../assets/nike.png') },
            { brand: 'puma', itemName: 'puma 4', price: 50, ratings: 3, imagesrc: require('../assets/nike.png') },
            { brand: 'nike', itemName: 'nike 4', price: 50, ratings: 5, imagesrc: require('../assets/nike.png') },
            { brand: 'nike', itemName: 'nike 5', price: 50, ratings: 4.5, imagesrc: require('../assets/nike.png') },
            { brand: 'reebok', itemName: 'reebok 1', price: 50, ratings: 4.5, imagesrc: require('../assets/nike.png') },
        ];

        return (
            <>
                <Text style={styles.title}>New Arrival</Text>

                <FlatList
                    data={products}
                    style={styles.listview}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer} >
                            <Card style={styles.card} >
                                <Card.Content style={styles.cardContent}>
                                    <Card.Cover source={item.imagesrc} style={styles.imageStyle} />
                                    <View style={styles.cardContentText}>
                                        <IconButton
                                        
                                            icon="heart"
                                            iconColor={MD3Colors.error50}
                                            size={40}
                                            onPress={() => console.log('Pressed')}
                                            style={styles.cardTitle}
                                        />
                                    </View>
                                    <View style={styles.productDetailsContainer}>
                                        <Text style={styles.brandName} >{item.brand}</Text>
                                        <Text style={styles.itemName}>{item.itemName}</Text>
                                        <Text style={styles.price}>$ {item.price}</Text>
                                        <View style={styles.priceRatingContainer}>
                                            <Text style={styles.ratings}>Ratings: {item.ratings}</Text>
                                        </View>
                                    </View>
                                </Card.Content>
                            </Card>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </>
        );
    }
}

const styles = StyleSheet.create({
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
        paddingVertical: 10
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
