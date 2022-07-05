import {StyleSheet} from 'react-native'
import {BORDER_RADIUS, COLORS} from '../../../../../../config/constants'

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 25,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  counter: {
    fontSize: 20,
    marginHorizontal: 15,
    fontWeight: 'bold',
    color: COLORS.blackColor,
  },
  viewButton: {
    minWidth: 80,
    height: 45,
    borderRadius: BORDER_RADIUS,
    shadowOffset: {width: 5, height: 5},
    shadowColor: COLORS.blackColor,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 7,
    backgroundColor: COLORS.primaryColor,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBtnText: {
    fontSize: 18,
    marginEnd: 10,
    fontWeight: '500',
    color: COLORS.secondGray,
  },
})
