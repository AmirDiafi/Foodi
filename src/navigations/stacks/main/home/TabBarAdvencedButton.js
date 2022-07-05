import React from 'react'
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {useSelector} from 'react-redux'
import {COLORS} from '../../../../../config/constants'
import {TabBg} from '../../../../svg/TabBg'

export const TabBarAdvancedButton = ({
  bgColor,
  item_size,
  onPress,
  iconName,
}) => {
  const {allInbox} = useSelector(state => state.calculator)
  return (
    <View
      style={{
        ...styles.container,
        width: item_size,
        height: item_size,
      }}
      pointerEvents="box-none">
      <TabBg color={bgColor} style={styles.background} item_size={item_size} />
      <TouchableOpacity
        style={{
          ...styles.button,
          width: item_size * 0.65,
          height: item_size * 0.65,
          borderRadius: (item_size * 0.65) / 2,
          top: -2,
        }}
        onPress={onPress}>
        <Icon name={iconName} color={COLORS.whiteColor} size={20} />
        {allInbox > 0 && (
          <View style={styles.allInboxContainer}>
            <Text style={styles.allInboxText}>{allInbox}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondaryColor,
  },

  allInboxContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: COLORS.whiteColor,
    width: 18,
    height: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allInboxText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.secondaryColor,
  },
})
