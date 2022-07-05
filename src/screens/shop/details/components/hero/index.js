import React from 'react'
import {Animated} from 'react-native'
import {styles} from './style'
const defaultImage = require('../../../../../assets/images/default-loading-image.png')

export default function Hero({
  data,
  heroTranslateY,
  heroOpacity,
  animatedRadius,
}) {
  return (
    <Animated.View
      style={{
        ...styles.container,
        borderBottomEndRadius: animatedRadius,
        borderBottomStartRadius: animatedRadius,
        transform: [
          {
            translateY: heroTranslateY,
          },
        ],
      }}>
      <Animated.Image
        defaultSource={defaultImage}
        source={data?.image ? data.image : defaultImage}
        style={{...styles.image, opacity: heroOpacity}}
      />
    </Animated.View>
  )
}
