import React from 'react'
import {Keyboard, Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {COLORS} from '../../../config/constants'
import {styles} from './style'
import {useSelector} from 'react-redux'

const Header = () => {
  const {allInbox} = useSelector(state => state.calculator)
  return (
    <View style={styles.container}>
      <View style={styles.dispaled} />
      <Text style={styles.title}>Foodi</Text>
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss()
        }}
        style={styles.button}>
        <Icon name="shopping-basket" size={18} color={COLORS.grayColor} />
        {allInbox > 0 && (
          <View style={styles.allInboxContainer}>
            <Text style={styles.allInboxText}>{allInbox}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  )
}

export default Header
