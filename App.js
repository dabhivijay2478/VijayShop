import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import Homescreen from "./components/Screens/HomeScreen"
import ProfileScreen from './components/Account/ProfileScreen';
import Payment from './components/Account/Payment';


const Stack = createNativeStackNavigator();

export default function App() {
  const [splashFinished, setSplashFinished] = useState(false);
  useEffect(() => {
    // Simulating an async task (e.g., loading data) during splash screen
    setTimeout(() => {
      setSplashFinished(true);
    }, 3000);
  }, []);
  if (!splashFinished) {
    return (
      <View style={{ flex: 1, backgroundColor: '#808080' }}>
        <LottieView
          source={require('./assets/splash.json')}
          autoPlay
          loop={false}
          onAnimationFinish={() => {
            setSplashFinished(true);
          }}
        />
      </View>
    );
  }
  return (


    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={Homescreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Checkout" component={Payment} />


        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});