import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import BasketScreen from '../../../../screens/basket'

const Stack = createNativeStackNavigator()

export default function BasketStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BasketScreen" component={BasketScreen} />
    </Stack.Navigator>
  )
}
