import {StyleSheet} from 'react-native'
import {COLORS, BORDER_RADIUS} from '../../../config/constants'

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primaryColor,
    borderRadius: BORDER_RADIUS,
  },
  inputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    color: COLORS.blackColor,
  },
  searchIconContainer: {
    width: '10%',
  },
  input: {
    paddingStart: 15,
    fontSize: 18,
    width: '90%',
  },
  buttonContainer: {
    width: '15%',
    alignItems: 'flex-end',
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
