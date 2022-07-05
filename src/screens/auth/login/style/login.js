import {StyleSheet} from 'react-native'
import {BORDER_RADIUS, COLORS} from '../../../../../config/constants'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: COLORS.blackColor,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: COLORS.secondaryColor,
    padding: 10,
    paddingHorizontal: 15,
    margin: 10,
    borderRadius: BORDER_RADIUS,
    shadowOffset: {width: 2, height: 2},
    shadowColor: COLORS.blackColor,
    shadowOpacity: 0.2,
    elevation: 2,
  },
  buttonText: {
    color: COLORS.whiteColor,
    fontSize: 20,
    textAlign: 'center',
    letterSpacing: 1.2,
  },
})

export default styles
