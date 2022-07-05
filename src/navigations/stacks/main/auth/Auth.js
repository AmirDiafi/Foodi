import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from '../../../../screens/auth/login'

const Stack = createNativeStackNavigator()

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack
