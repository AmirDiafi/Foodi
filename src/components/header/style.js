import {StyleSheet} from 'react-native'
import {COLORS, BORDER_RADIUS} from '../../../config/constants'
const buttonSize = 45

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.blackColor,
  },
  button: {
    backgroundColor: COLORS.primaryColor,
    shadowOffset: {width: 5, height: 5},
    shadowColor: COLORS.blackColor,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7,
    borderRadius: BORDER_RADIUS,
    width: buttonSize,
    height: buttonSize,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  dispaled: {
    opacity: 0,
  },
  allInboxContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: COLORS.secondaryColor,
    width: 18,
    height: 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allInboxText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.whiteColor,
  },
})
