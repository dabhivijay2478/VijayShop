import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import Favouritelist from './Favouritelist';

export default function Favourite() {
  const navigation = useNavigation();

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Favourite" />
      </Appbar.Header>
      <ScrollView>
        <Favouritelist />
      </ScrollView>
    </>
  );
}
