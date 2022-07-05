import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProdileScreen from '../../../../screens/profile'

const Stack = createNativeStackNavigator()

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProdileScreen" component={ProdileScreen} />
    </Stack.Navigator>
  )
}
