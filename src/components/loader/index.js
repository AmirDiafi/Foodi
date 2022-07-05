import React from 'react'
import {View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native'
import {COLORS} from '../../../config/constants'
const {height} = Dimensions.get('window')

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.secondaryColor} />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: height * 0.8,
  },
})
