import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Favourite() {
  const navigation = useNavigation();

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Favourite" />
        <Appbar.Action icon="account" onPress={() => {}} />
      </Appbar.Header>
    </>
  );
}
