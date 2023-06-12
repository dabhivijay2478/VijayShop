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
import Notification from './components/Notification/Notification';
import Loginscreen from './components/Screens/Loginscreen';
import Signupscreen from './components/Screens/Signupscreen';
import Order from './components/Order/Order';
import Settings from './components/Settings/Settings';
import Productdetails from './components/Product/Productdetails';


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
      <View style={{ flex: 1, backgroundColor: 'turquoise' }}>
        <LottieView
          source={require('./assets/shopasplash.json')}
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
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Login" component={Loginscreen} />
          <Stack.Screen name="Signup" component={Signupscreen} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="ProductDetails" component={Productdetails} />



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