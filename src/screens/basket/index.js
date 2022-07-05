import React from 'react'
import {SafeAreaView, Text, View} from 'react-native'
import {useSelector} from 'react-redux'
import {PRICES} from '../../../config/constants'
import Divider from '../../components/divider/Divider'
import {styles} from './style'

export default function BasketScreen() {
  const {breadItemsCount, milkItemsCount, butterItemsCount} = useSelector(
    state => state.calculator,
  )
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Calculatoions:</Text>

      {breadItemsCount > 0 && (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>
            Bread {breadItemsCount} * £{PRICES.bread}
          </Text>
          <Text style={styles.itemText}>
            Bread: £{calcBread(breadItemsCount, butterItemsCount)}
          </Text>
        </View>
      )}
      {butterItemsCount > 0 && (
        <>
          <Divider />
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>
              Butter {butterItemsCount} * £{PRICES.butter}
            </Text>
            <Text style={styles.itemText}>
              Butter: £{calcButter(butterItemsCount).toFixed(2)}
            </Text>
          </View>
        </>
      )}
      {milkItemsCount > 0 && (
        <>
          <Divider />
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>
              Milk {milkItemsCount} * £{PRICES.milk}
            </Text>
            <Text style={styles.itemText}>
              Milk: £{calcMilk(milkItemsCount).toFixed(2)}
            </Text>
          </View>
        </>
      )}
      <Divider />
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>
          Total: £
          {calcTotal(breadItemsCount, butterItemsCount, milkItemsCount).toFixed(
            2,
          )}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const calcBread = (breadItemsCount, butterItemsCount) => {
  return breadItemsCount > 0
    ? butterItemsCount > 1
      ? PRICES.bread * 0.5 + (breadItemsCount - 1) * PRICES.bread
      : breadItemsCount * PRICES.bread
    : 0
}

const calcButter = butterItemsCount => {
  return butterItemsCount * PRICES.butter
}

const calcMilk = milkItemsCount => {
  const off = milkItemsCount / 4
  return nat(off)
    ? (milkItemsCount - off) * PRICES.milk
    : milkItemsCount * PRICES.milk
}

const calcTotal = (breadItemsCount, butterItemsCount, milkItemsCount) => {
  return (
    calcBread(breadItemsCount, butterItemsCount) +
    calcMilk(milkItemsCount) +
    calcButter(butterItemsCount)
  )
}

function nat(n) {
  return n >= 0 && Math.floor(n) === +n
}
