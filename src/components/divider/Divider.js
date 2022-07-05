import React from 'react'
import {StyleSheet, View} from 'react-native'
import {COLORS} from '../../../config/constants'

export default function Divider() {
  return <View style={styles.container} />
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.grayColor,
    height: 2,
    width: '100%',
  },
})
