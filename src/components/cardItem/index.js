import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {useSelector} from 'react-redux'
import {COLORS} from '../../../config/constants'
import {styles} from './style'
import {
  buyBread,
  buyMilk,
  buyButter,
} from '../../features/calculator/calculator'
import {useDispatch} from 'react-redux'

const defaultImage = require('../../assets/images/default-loading-image.png')

export default function CardItem({data, isLastItem, navigation}) {
  const dispatch = useDispatch()
  const {inBasketIds} = useSelector(state => state.calculator)

  const onBuy = () => {
    switch (data.type) {
      case 'bread':
        dispatch(
          buyBread({
            plus: !inBasketIds.includes(data.id),
            id: data.id,
            clear: true,
          }),
        )
        break
      case 'butter':
        dispatch(
          buyButter({
            plus: !inBasketIds.includes(data.id),
            id: data.id,
            clear: true,
          }),
        )
        break
      case 'milk':
        dispatch(
          buyMilk({
            plus: !inBasketIds.includes(data.id),
            id: data.id,
            clear: true,
          }),
        )
        break

      default:
        break
    }
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailsScreen', {data})
      }}
      activeOpacity={0.9}
      style={{...styles.container, marginEnd: isLastItem ? 0 : 25}}>
      <Image
        defaultSource={defaultImage}
        source={data?.image ? data.image : defaultImage}
        style={styles.image}
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.status}>{data?.status}</Text>
          <Text style={styles.title}>{data?.title}</Text>
          <Text style={styles.price}>£{data?.price}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            onBuy()
          }}
          style={{
            ...styles.button,
            backgroundColor: inBasketIds.includes(data.id)
              ? COLORS.secondaryColor
              : COLORS.primaryColor,
          }}>
          <Icon
            name="shopping-basket"
            size={18}
            color={
              inBasketIds.includes(data.id)
                ? COLORS.whiteColor
                : COLORS.grayColor
            }
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
