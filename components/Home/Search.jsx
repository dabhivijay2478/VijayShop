import React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Search() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => setSearchQuery(query);

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{
                    flex: 1,
                    height: 50,
                    borderRadius: 10,
                    borderColor: 'black',
                    backgroundColor: 'white',
                    elevation: 2,
                    marginRight: 10,
                }}
            />
            <Icon name="bell" size={30} style={{ marginRight: 10, color: "blue" }} />
        </View>
    );
}
