import React from 'react'
import { StyleSheet } from 'react-native';
import Menu from '../Home/Menu';




export default function HomeScreen() {
  return (
    <>
      <Menu style={styles.content} />
    </>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginBottom: 0, // Adjust this value to give space for the bottom navigation bar
  },
});
