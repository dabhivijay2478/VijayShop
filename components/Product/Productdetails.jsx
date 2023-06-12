import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import { Appbar, Text, Divider, Chip, ActivityIndicator, Button } from 'react-native-paper';

export default function ProductDetails({ route }) {
    const navigation = useNavigation();
    const { product } = route.params;

    if (!product) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                <Appbar.Content title="Product Details" />
            </Appbar.Header>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: product.imagesrc }} style={styles.productImage} />
                </View>
                <View style={styles.productInfoContainer}>
                    {/* Render product details */}
                    <Text variant="titleMedium" style={styles.textMargin}>
                        {product.name}
                    </Text>
                    <Text variant="headlineSmall" style={styles.textMargin}>
                        {product.brand}
                    </Text>
                    <Text variant="titleLarge" style={styles.textMargin}>
                        $ {product.price}
                    </Text>
                    <Text variant="titleLarge" style={styles.textMargin}>
                        {product.stock ? 'In stock' : 'Out of stock'}
                    </Text>
                    <Text variant="titleLarge" style={styles.textMargin}>
                        Sold by {product.seller}
                    </Text>
                </View>
                {product.sizeOptions && (
                    <>
                        <Divider bold theme={{ colors: { primary: 'green' } }} style={styles.divider} />
                        <View style={styles.productInfoContainer}>
                            <Text variant="headlineSmall">Select Size</Text>
                            <ScrollView horizontal>
                                <View style={styles.chipContainer}>
                                    {product.sizeOptions.map((size) => (
                                        <Chip key={size} mode="outlined" style={styles.chip}>
                                            US {size}
                                        </Chip>
                                    ))}
                                </View>
                            </ScrollView>
                        </View>
                    </>
                )}
                <Divider bold theme={{ colors: { primary: 'green' } }} style={styles.divider} />
                <View style={styles.productInfoContainer}>
                    <Text variant="headlineSmall">Select Color</Text>
                    <ScrollView horizontal>
                        <View style={styles.chipContainer}>
                            {product.colorOptions.map((option) => (
                                <Chip
                                    key={option.color}
                                    mode="outlined"
                                    style={[styles.chip, { backgroundColor: option.color }]}
                                    textStyle={styles.chipText}
                                >
                                    {option.label}
                                </Chip>
                            ))}
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.productInfoContainer}>
                    <Text variant="titleLarge" style={styles.textMargin}>
                        Description
                    </Text>
                    <View style={styles.bulletContainer}>
                        {product.description.split('\n').map((line, index) => (
                            <Text key={index} style={styles.bulletText}>
                                • {line.trim()}
                            </Text>
                        ))}
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button icon="shopping" mode="contained" onPress={() => navigation.navigate('Payment')}>
                        Buy Now
                    </Button>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: 50,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImage: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginVertical: 20,
    },
    productInfoContainer: {
        margin: 20,
    },
    textMargin: {
        marginTop: 10,
        marginBottom: 10,
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    divider: {
        borderColor: 'slategray',
        borderWidth: 0.5,
        margin: 15,
        marginTop: 5,
    },
    chipContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },
    chip: {
        marginEnd: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    chipText: {
        color: 'white',
    },
    bulletContainer: {
        marginLeft: 20,
        marginTop: 10,
    },
    bulletText: {
        marginTop: 5,
        marginLeft: 10,
    },
    buttonContainer: {
        margin: 10,
        marginStart: 20,
        marginEnd: 20,
        marginBottom: 15,
    },
});
