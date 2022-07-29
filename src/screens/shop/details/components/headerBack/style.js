import {Platform, StyleSheet} from 'react-native'
import {
  BORDER_RADIUS,
  COLORS,
  HERO_MIN_HEIGHT,
} from '../../../../../../config/constants'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    top: Platform.OS === 'ios' ? 15 : 0,
    left: 0,
    right: 0,
    zIndex: 3,
    padding: 15,
    height: HERO_MIN_HEIGHT,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.whiteColor,
  },
  backButton: {
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
