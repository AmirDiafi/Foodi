import React from 'react'
import SearchBar from '../searchBar'
import Header from '../header'
import {styles} from './styles'
import {Animated} from 'react-native'

export default function MainHeader() {
  return (
    <Animated.View style={styles.container}>
      <Header />
      <SearchBar
        translateY={0}
        placeholder="search here"
        onChangeText={value => {
          __DEV__ && console.log('value to search: ', value)
        }}
      />
    </Animated.View>
  )
}
