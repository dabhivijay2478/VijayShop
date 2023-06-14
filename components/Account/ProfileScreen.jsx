import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Appbar, Avatar, Text, Card, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Addresslist from './Addresslist';
export default function ProfileScreen() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Profile" />
        <Appbar.Action icon="home" onPress={() => navigation.navigate('Home')} />
      </Appbar.Header>
      <ScrollView>
        <View>
          <View style={styles.container}>
            <Avatar.Image size={100} source={{ uri: image }} style={styles.avatarstyle} />
            <Text variant="headlineMedium" style={styles.textStyle} >Vijay Dabhi</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={pickImage} style={styles.imagePickerButton}>
              Pick an image
            </Button>

          </View>
          <View style={styles.maincardview}>


            <View style={styles.cardview} >

              <Card style={styles.cardstyle}>

                <Card.Content style={styles.cardcontentstyle} >
                  <TextInput
                    mode="outlined"
                    label="Enter Full Name"
                    placeholder="Your Full Name"
                    right={<TextInput.Icon icon="account" />}
                    style={styles.cardinputstyle}
                  />

                  <TextInput
                    mode="outlined"
                    label="Enter Email"
                    placeholder="Your Email"
                    right={<TextInput.Icon icon="email" />}
                    style={styles.cardinputstyle}
                  />
                  <TextInput
                    mode="outlined"
                    label="Enter Mobile No"
                    placeholder="Your Mobile No"
                    secureTextEntry
                    right={<TextInput.Icon icon="phone" />}
                    style={styles.cardinputstyle}

                  />
                  <Button style={styles.Addressbutton} labelStyle={styles.buttonLabel} onPress={() => navigation.navigate('Addresslist')}>Address</Button>

                </Card.Content>
                <Card.Actions style={styles.cardactionstyle} >
                  <Button style={styles.actionbutton} labelStyle={styles.buttonLabel}>Update Profile</Button>
                </Card.Actions>



              </Card>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarstyle: {
    marginStart: 20,
  },
  textStyle: {
    marginStart: 10,
  },
  maincardview: {
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 5,


  },
  cardstyle: {
    // backgroundColor: 'slategray'

  },
  cardview: {
    padding: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    borderColor: 'steelblue',
    borderWidth: 2,
    margin: 10,
    shadowColor: 'steelblue',
    shadowOpacity: 10,
    shadowOffset: 10,
    shadowRadius: 10,
    justifyContent: 'center',
    backgroundColor: "steelblue"
  },
  cardcontentstyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,

  },
  cardinputstyle: {
    margin: 5,
    marginBottom: 2,
    marginTop: 10
  },
  cardactionstyle: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  actionbutton: {
    backgroundColor: '#00fa9a',
    color: 'white'
  },
  buttonLabel: {
    color: 'black',
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    margin: 15,
    alignSelf: 'center'
  },
  signUpText: {
    fontWeight: 'bold',
    marginLeft: 5,
    color: 'steelblue',
    textDecorationLine: 'underline',

  },
  imagePickerButton: {
    marginVertical: 10,
    backgroundColor: 'teal',
    width: 200,
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  Addressbutton: {
    margin: 15,
    backgroundColor: '#00fa9a',
    color: 'white'
  }
})