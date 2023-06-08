import React from 'react'
import {
  ScrollView,
} from 'react-native';
import Test from './components/Test';
import SplashScreen from './components/SplashScreen';

export default function App() {
  return (
    <>
      <ScrollView >
        {/* <Test /> */}
        <SplashScreen />
      </ScrollView>
    </>

  );
}
