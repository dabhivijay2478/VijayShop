import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { View } from 'react-native';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function ProductCard() {
    return (
        <>
            <View style={{ paddingHorizontal: 20, paddingVertical: 15, paddingBottom: 2 }}>
                <Card style={{ paddingHorizontal: 20, paddingVertical: 15, backgroundColor: "black" }}>

                    <Card.Cover source={{ uri: 'https://picsum.photos/400' }} />
                    <Card.Actions style={{ alignItems: "flex-start", display: "flex", flexDirection: "column" }}>
                        <Button>Cancel</Button>

                    </Card.Actions>
                </Card>
            </View>
        </>
    )
}

