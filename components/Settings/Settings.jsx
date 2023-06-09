import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Settingslist from './Settingslist';
import { ScrollView } from 'react-native';

export default function Settings() {
  const navigation = useNavigation();

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
        <Appbar.Content title="Settings" />
      </Appbar.Header>
      <ScrollView>
        <Settingslist />
      </ScrollView>
    </>
  );
}
