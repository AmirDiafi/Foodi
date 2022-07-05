import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {COLORS} from '../../../../../config/constants'
import {styles} from './style'

const indecatorHeight = 3
const marginEnd = 5
const none = 0

export default function ScrollItem({data, isSelected, onPress, isLastOne}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, marginEnd: isLastOne ? marginEnd : none}}>
      <Text
        style={{
          ...styles.itemTextStyle,
          color: isSelected ? COLORS.secondaryColor : COLORS.grayColor,
        }}>
        {data.title}
      </Text>
      <View
        style={{
          ...styles.indecatorStyle,
          height: isSelected ? indecatorHeight : none,
        }}
      />
    </TouchableOpacity>
  )
}
