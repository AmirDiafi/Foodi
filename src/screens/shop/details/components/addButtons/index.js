import React, {useState} from 'react'
import {Text, View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import {useDispatch, useSelector} from 'react-redux'
import {COLORS} from '../../../../../../config/constants'
import {styles} from './style'
import {
  buyBread,
  buyMilk,
  buyButter,
} from '../../../../../features/calculator/calculator'

export default function AddButtons({data}) {
  const dispatch = useDispatch()
  const [lastClickedButton, setLastClickedButton] = useState(null)

  const onBuy = plus => {
    switch (data.type) {
      case 'bread':
        dispatch(buyBread({plus, id: data.id}))
        break
      case 'butter':
        dispatch(buyButter({plus, id: data.id}))
        break
      case 'milk':
        dispatch(buyMilk({plus, id: data.id}))
        break

      default:
        break
    }
  }
  let whatType
  switch (data.type) {
    case 'bread':
      whatType = 'breadItemsCount'
      break
    case 'milk':
      whatType = 'milkItemsCount'
      break
    case 'butter':
      whatType = 'butterItemsCount'
      break

    default:
      break
  }
  const counter = useSelector(state => state.calculator[whatType])
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          disabled={counter <= 0}
          onPress={() => {
            setLastClickedButton(0)
            onBuy(false)
          }}
          style={{
            ...styles.button,
            backgroundColor:
              lastClickedButton === 0
                ? COLORS.secondaryColor
                : COLORS.primaryColor,
            shadowColor:
              lastClickedButton === 0 ? COLORS.transparent : COLORS.blackColor,
          }}>
          <Icon
            name="minus"
            size={20}
            color={
              lastClickedButton === 0 ? COLORS.whiteColor : COLORS.grayColor
            }
          />
        </TouchableOpacity>
        <Text style={styles.counter}>{counter}</Text>
        <TouchableOpacity
          onPress={() => {
            setLastClickedButton(1)
            onBuy(true)
          }}
          style={{
            ...styles.button,
            backgroundColor:
              lastClickedButton === 1
                ? COLORS.secondaryColor
                : COLORS.primaryColor,
            shadowColor:
              lastClickedButton === 1 ? COLORS.transparent : COLORS.blackColor,
          }}>
          <Icon
            name="plus"
            size={20}
            color={
              lastClickedButton === 1 ? COLORS.whiteColor : COLORS.grayColor
            }
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewBtnText}>View cart</Text>
          <Icon name="chevron-right" size={20} color={COLORS.grayColor} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
