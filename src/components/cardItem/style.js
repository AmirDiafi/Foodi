import {Dimensions, StyleSheet} from 'react-native'
const {width} = Dimensions.get('window')
const margin = 15
const imageSize = width - margin * 2
import {COLORS, BORDER_RADIUS} from '../../../config/constants'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryColor,
    borderRadius: BORDER_RADIUS,
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: COLORS.blackColor,
    elevation: 7,
  },
  image: {
    width: imageSize * 0.7,
    height: imageSize * 0.7,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  content: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  status: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.grayColor,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: COLORS.blackColor,
  },
  price: {
    fontSize: 26,
    fontWeight: '500',
    color: COLORS.blackColor,
  },
  button: {
    width: 45,
    height: 45,
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 5, height: 5},
    shadowColor: COLORS.blackColor,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7,
    backgroundColor: COLORS.primaryColor,
  },
})
