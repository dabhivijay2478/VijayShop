import React from 'react'
import { ScrollView } from 'react-native';
import Menu from '../Home/Menu';
import Search from '../Home/Search';
import ProductCard from '../Home/ProductCard';



export default function HomeScreen() {
  return (
    <>
      <Search />
      <ScrollView>
        <ProductCard />
      </ScrollView >
      <Menu />
    </>

  )
}
