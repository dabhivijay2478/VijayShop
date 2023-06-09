import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Settings() {
  const navigation = useNavigation();

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Settings" />
        <Appbar.Action icon="account" onPress={() => {}} />
      </Appbar.Header>
    </>
  );
}
