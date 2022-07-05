import React from 'react'
import {TouchableOpacity, View, Animated} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {COLORS} from '../../../../../../config/constants'
import {styles} from './style'

export default function HeaderBack({title, navigation, titleOpacity}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Icon name="chevron-left" size={20} color={COLORS.grayColor} />
      </TouchableOpacity>
      <Animated.Text style={{...styles.title, opacity: titleOpacity}}>
        {title}
      </Animated.Text>
    </View>
  )
}
