import React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function Search() {
    const navigation = useNavigation();

    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query) => setSearchQuery(query);

    const handleNotificationPress = () => {
        navigation.navigate('Notification');
    };

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
            {searchQuery !== '' && (
                <Icon
                    name="filter"
                    size={30}
                    style={{ marginRight: 10, color: 'slategray' }}
                />
            )}
            {searchQuery === '' && (
                <Icon
                    name="bell-badge"
                    size={30}
                    style={{ marginRight: 10, color: 'slategray' }}
                    onPress={handleNotificationPress}
                />
            )}
        </View>
    );
}
