import React from 'react'
import Svg, {Path} from 'react-native-svg'

export const TabBg = ({color = '#FFFFFF', item_size, ...props}) => {
  return (
    <Svg width={79} height={75} viewBox={`0 0 75 45`} {...props}>
      <Path
        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 11.7 12.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
        fill={color}
      />
    </Svg>
  )
}
