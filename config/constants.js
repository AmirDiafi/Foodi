import {Dimensions} from 'react-native'

const {width} = Dimensions.get('window')

const TAB_BAR_HEIGHT = 61
const SEARCH_BAR_HEIGHT = 80
const MAIN_HEADER_HEIGHT = 143
const BORDER_RADIUS = 15
const HERO_MAX_HEIGHT = width
const HERO_MIN_HEIGHT = 65

const COLORS = {
  primaryColor: '#f0f7fe',
  secondaryColor: '#00e2c5',
  blackColor: '#1f2023',
  whiteColor: '#ffffff',
  grayColor: '#c6dae5',
  secondGray: '#656565',
  transparent: 'transparent',
}

const PRICES = {
  bread: 1.0,
  milk: 1.15,
  butter: 0.8,
}

export {
  TAB_BAR_HEIGHT,
  SEARCH_BAR_HEIGHT,
  MAIN_HEADER_HEIGHT,
  COLORS,
  BORDER_RADIUS,
  PRICES,
  HERO_MAX_HEIGHT,
  HERO_MIN_HEIGHT,
}
