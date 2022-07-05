import React, {useRef} from 'react'
import {SafeAreaView, Animated} from 'react-native'
import {styles} from '../../style'
import Hero from './components/hero'
import HeaderBack from './components/headerBack'
import Description from './components/description'
import AddButtons from './components/addButtons'
import {
  HERO_MAX_HEIGHT,
  HERO_MIN_HEIGHT,
  TAB_BAR_HEIGHT,
} from '../../../../config/constants'

export default function DetailsScreen({route, navigation}) {
  const params = route.params
  const data = params?.data ?? {}
  const scrollY = useRef(new Animated.Value(0)).current

  const heroTranslateY = scrollY.interpolate({
    inputRange: [0, HERO_MAX_HEIGHT],
    outputRange: [0, -HERO_MAX_HEIGHT + HERO_MIN_HEIGHT],
    extrapolate: 'clamp',
  })

  const heroOpacity = scrollY.interpolate({
    inputRange: [0, HERO_MAX_HEIGHT],
    outputRange: [1, 0.5],
    extrapolate: 'clamp',
  })

  const titleOpacity = scrollY.interpolate({
    inputRange: [0, HERO_MAX_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  const animatedRadius = scrollY.interpolate({
    inputRange: [0, HERO_MAX_HEIGHT],
    outputRange: [170, 0],
    extrapolate: 'clamp',
  })

  return (
    <SafeAreaView style={styles.container}>
      <Hero
        data={data}
        heroTranslateY={heroTranslateY}
        heroOpacity={heroOpacity}
        animatedRadius={animatedRadius}
      />
      <HeaderBack
        titleOpacity={titleOpacity}
        title={data?.title}
        navigation={navigation}
      />
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{
          paddingTop: HERO_MAX_HEIGHT,
          paddingBottom: TAB_BAR_HEIGHT,
        }}>
        <Description data={data} />
        <AddButtons data={data} />
      </Animated.ScrollView>
    </SafeAreaView>
  )
}
