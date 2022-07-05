import React from 'react'
import {View, Text} from 'react-native'
import {styles} from './style'

export default function Description({data}) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{data?.title}</Text>
        <Text style={styles.price}>£{data?.price}</Text>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.description}>
          {data?.description ?? 'no description yet!'}
        </Text>
      </View>
    </View>
  )
}
