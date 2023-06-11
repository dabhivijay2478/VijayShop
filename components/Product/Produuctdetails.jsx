import React from 'react';
import { Appbar, Text, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, Image, StyleSheet } from 'react-native';

export default function ProductDetails() {
    const navigation = useNavigation();

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                <Appbar.Content title="Product Details" />
            </Appbar.Header>
            <ScrollView>
                <View>
                    <Image
                        source={require('../assets/puma1.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.productinfostyle}>
                    <Text variant="titleMedium">Product Name</Text>
                    <Text variant="headlineSmall">Product Brand</Text>
                    <Text variant="titleLarge">Product Price</Text>

                </View>
                <Divider bold theme={{ colors: { primary: 'green' } }} style={{ borderColor: "slategray ", borderWidth: 0.5, margin: 20 }} />
                <View style={styles.productinfostyle}>
                    <Text variant="headlineSmall" >Product Brand</Text>

                </View>

            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',


    },
    productinfostyle: {
        margin: 20,
        marginTop: 10,
        alignContent: 'center',
        marginStart: 30,
        fontSize: 16,
        fontWeight: 'bold',
    }
});
