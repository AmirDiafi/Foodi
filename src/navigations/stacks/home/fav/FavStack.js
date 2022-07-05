import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FavScreen from '../../../../screens/fav'

const Stack = createNativeStackNavigator()

export default function FavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FavScreen" component={FavScreen} />
    </Stack.Navigator>
  )
}
