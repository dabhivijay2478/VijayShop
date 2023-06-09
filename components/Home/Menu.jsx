import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductCard from './ProductCard';
import Brand from './Brand';
import NewArrival from './NewArrival';
import Search from "./Search"
import Cart from "../Cart/Cart"
import Favourite from "../Favourite/Favourite"
import Settings from '../Settings/Settings';

const Tab = createBottomTabNavigator();

export default function Menu() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}


      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!event.defaultPrevented) {
              navigation.navigate(route.name); // Navigate to the selected screen
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }
            return null;
          }}
          style={styles.activetab}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}

      />


      <Tab.Screen
        name="Fav"
        component={Fav}
        options={{
          tabBarLabel: 'Fav',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="heart" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cart" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cog" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <>
      <Search />
      <ScrollView style={styles.container}>
        <ProductCard />
        <Brand />
        <NewArrival />
      </ScrollView >
    </>
  );
}
function CartScreen() {
  return (
    <Cart />
  );
}

function SettingsScreen() {
  return (
    <Settings />  
  );
}
function Fav() {
  return (
    <Favourite />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginBottom: 0,
  },
  activetab: {
    backgroundColor: "#95a5a6"
  }
});