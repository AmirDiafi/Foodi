import * as React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {useDispatch} from 'react-redux'
import {login} from '../../../features/auth/auth'
import styles from './style/login'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function LoginScreen() {
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Foodi</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(login())
        }}>
        <Text style={styles.buttonText}>
          Start shopping <Icon name="arrow-right" size={16} color="#fff" />
        </Text>
      </TouchableOpacity>
    </View>
  )
}
