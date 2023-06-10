import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Profile" />
        <Appbar.Action icon="home" onPress={() => navigation.navigate('Home')} />
      </Appbar.Header>

    </>
  );
}
