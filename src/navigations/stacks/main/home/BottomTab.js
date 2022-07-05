import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {COLORS, TAB_BAR_HEIGHT} from '../../../../../config/constants'
import {TabBarAdvancedButton} from './TabBarAdvencedButton'

const item_size = Dimensions.get('window').width / 5

function BottomTab({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key]
        const label = route.name

        const iconName = options.tabBarLabel
        const isFocused = state.index === index
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true})
          }
        }
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        if (index === 2) {
          return (
            <View style={styles.button} key={index}>
              <View
                style={{
                  ...styles.buttonContent,
                  backgroundColor: COLORS.transparent,
                }}>
                <TabBarAdvancedButton
                  bgColor={COLORS.primaryColor}
                  onPress={onPress}
                  item_size={item_size}
                  iconName={iconName}
                />
              </View>
            </View>
          )
        } else {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.9}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.button}>
              <View style={styles.buttonContent}>
                {isFocused ? (
                  <View style={styles.selectedItemContainer}>
                    <View style={styles.annotation} />
                    <Text style={styles.selectedItemText}>{label}</Text>
                  </View>
                ) : (
                  <Icon name={iconName} size={25} color={COLORS.grayColor} />
                )}
              </View>
            </TouchableOpacity>
          )
        }
      })}
    </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    flex: 1,
  },
  buttonContent: {
    width: item_size,
    height: 51,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryColor,
  },
  animatedIconContainer: {
    zIndex: 2,
  },

  selectedItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.secondaryColor,
  },
  annotation: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: COLORS.secondaryColor,
  },
})
