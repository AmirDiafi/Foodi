import {StyleSheet} from 'react-native'
import {MAIN_HEADER_HEIGHT} from '../../../config/constants'

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 15,
    right: 15,
    height: MAIN_HEADER_HEIGHT,
    zIndex: 2,
  },
})
