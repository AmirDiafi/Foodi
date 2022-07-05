import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ShopSreen from '../../../../screens/shop'
import DetailsScreen from '../../../../screens/shop/details'

const Stack = createNativeStackNavigator()

function ShopStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ShopSreen" component={ShopSreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  )
}

export default ShopStack
