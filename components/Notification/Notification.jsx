import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { IconButton, Card, Text, MD3Colors } from 'react-native-paper';

export default function Notification() {
    const navigation = useNavigation();

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
                <Appbar.Content title="Notification" />
                <Appbar.Action onPress={() => navigation.navigate('Profile')} icon="account" />
            </Appbar.Header>
            <ScrollView>
                <Card style={styles.card}>
                    <Card.Actions>
                        <IconButton
                            icon="close"
                            iconColor={MD3Colors.error50}
                            size={20}
                            onPress={() => console.log('Pressed')}
                        />
                    </Card.Actions>
                    <Card.Content>
                        <Text variant="titleLarge" style={styles.cardTitle}>
                            Card title
                        </Text>
                    </Card.Content>
                </Card>
            </ScrollView>
        </>
    );
}

const styles = {
    card: {
        margin: 20,
        borderRadius: 10,
        borderColor: 'red', 
        borderWidth: 2,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
};
