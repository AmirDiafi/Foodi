import {StyleSheet} from 'react-native'
import {COLORS, HERO_MAX_HEIGHT} from '../../../../../../config/constants'

export const styles = StyleSheet.create({
  container: {
    width: HERO_MAX_HEIGHT,
    height: HERO_MAX_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: COLORS.blackColor,
    overflow: 'hidden',
    shadowColor: COLORS.blackColor,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
