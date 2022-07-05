import React, {useEffect, useMemo, useRef, useState} from 'react'
import {Animated, SafeAreaView} from 'react-native'
import {styles} from '../style'
import {MAIN_HEADER_HEIGHT, TAB_BAR_HEIGHT} from '../../../config/constants'
import MainHeader from '../../components/MainHeader'
import ScrollableItem from './scrollableItem/ScrollableItem'
import ItemsList from '../../components/itemsList'
import Loader from '../../components/loader'

const ShopScreen = ({navigation}) => {
  const scrolling = useRef(new Animated.Value(0)).current
  const [selectedId, setSelectedId] = useState(0)
  const [isFetching, setFetching] = React.useState(true)

  useEffect(() => {
    loadeIt()
  }, [])

  const loadeIt = () => {
    setFetching(true)
    setTimeout(() => {
      setFetching(false)
    }, 500)
  }

  const MemoizedList = useMemo(
    () => (
      <ScrollableItem
        loadeIt={loadeIt}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    ),
    [selectedId],
  )

  const translateY = scrolling.interpolate({
    inputRange: [0, MAIN_HEADER_HEIGHT],
    outputRange: [0, -MAIN_HEADER_HEIGHT],
    extrapolate: 'clamp',
  })

  return (
    <SafeAreaView style={styles.container}>
      <MainHeader translateY={translateY} />
      <Animated.ScrollView
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: MAIN_HEADER_HEIGHT,
          paddingBottom: TAB_BAR_HEIGHT,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolling,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}>
        {MemoizedList}

        {isFetching ? (
          <Loader />
        ) : (
          <>
            <ItemsList navigation={navigation} />
            <ItemsList navigation={navigation} />
            <ItemsList navigation={navigation} />
            <ItemsList navigation={navigation} />
          </>
        )}
      </Animated.ScrollView>
    </SafeAreaView>
  )
}

export default ShopScreen
