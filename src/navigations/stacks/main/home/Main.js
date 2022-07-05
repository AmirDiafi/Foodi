import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MyTabBar from './BottomTab'
import HomeStack from '../../home/home/HomeStack'
import ShopStack from '../../home/shop/ShopStack'
import BasketStack from '../../home/basket/BasketStack'
import FavStack from '../../home/fav/FavStack'
import ProfileStack from '../../home/profile/ProfileStack'

const Tab = createBottomTabNavigator()

export default function MainStack() {
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarBackground: 'red',
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'home',
        }}
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'shopping-bag',
        }}
        name="Shop"
        component={ShopStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'shopping-basket',
        }}
        name="Basket"
        component={BasketStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'heart',
        }}
        name="Favorite"
        component={FavStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'user',
        }}
        name="Profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  )
}
