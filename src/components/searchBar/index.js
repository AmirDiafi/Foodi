import React from 'react'
import {TextInput, TouchableOpacity, View, Keyboard} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {COLORS} from '../../../config/constants'
import {styles} from './style'
import {Neomorph} from 'react-native-neomorph-shadows'

const SearchBar = ({onChangeText}) => {
  return (
    // <Neomorph>
    <View style={styles.container}>
      <View style={styles.inputContent}>
        <View style={styles.searchIconContainer}>
          <Icon name="search" size={25} color={COLORS.secondaryColor} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={onChangeText}
          placeholderTextColor={COLORS.grayColor}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss()
          }}
          style={styles.button}>
          <Icon name="sliders" size={18} color={COLORS.grayColor} />
        </TouchableOpacity>
      </View>
    </View>
    // </Neomorph>
  )
}

export default SearchBar
