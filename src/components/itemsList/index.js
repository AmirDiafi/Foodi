import React from 'react'
import {FlatList} from 'react-native'
import CardItem from '../cardItem/index'
import {styles} from './style'
import {PRICES} from '../../../config/constants'

export default function ItemsList({navigation}) {
  const items = [
    {
      id: 0,
      status: 'indoor',
      isBasket: false,
      title: 'Bread',
      type: 'bread',
      price: PRICES.bread,
      image: require('../../assets/images/bread.jpeg'),
      description:
        'A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea. A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea. A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea. A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea. A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea.',
    },
    {
      id: 1,
      status: 'indoor',
      isBasket: false,
      title: 'Milk',
      price: PRICES.milk,
      type: 'milk',
      image: require('../../assets/images/milk.jpeg'),
      description:
        'A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea. A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea. A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea. A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea. A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea.',
    },
    {
      id: 2,
      status: 'indoor',
      isBasket: false,
      title: 'Butter',
      price: PRICES.butter,
      type: 'butter',
      image: require('../../assets/images/butter.jpeg'),
      description:
        'A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea. A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea. A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea. A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea. A loaf of bread, fresh every day!, Milk tea is simply what it sounds like- tea with milk added. This combination creates a smoothness and slight sweetness to normal bitter teas such as black tea. Milk tea can be made into anything, such as bubble tea or masala chai tea.',
    },
  ]

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      data={items}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item, index}) => (
        <CardItem
          data={item}
          isLastItem={index === items.length - 1}
          navigation={navigation}
        />
      )}
    />
  )
}
