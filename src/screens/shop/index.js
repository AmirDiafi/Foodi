import React, {useEffect, useMemo, useRef, useState} from 'react'
import {Animated, SafeAreaView} from 'react-native'
import {styles} from '../style'
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

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        scrollEventThrottle={16}
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
        <MainHeader />
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
