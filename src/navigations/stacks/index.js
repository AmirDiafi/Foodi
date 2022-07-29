import React from 'react'
import {SafeAreaView} from 'react-native'
import {useSelector} from 'react-redux'
import AuthStack from './main/auth/Auth'
import MainStack from './main/home/Main'

export default function Container() {
  const {isLogedIn} = useSelector(state => state.auth)
  return isLogedIn ? <MainStack /> : <AuthStack />
}
