import {StyleSheet} from 'react-native'
import {COLORS} from '../../../../../config/constants'

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTextStyle: {
    fontSize: 18,
    color: COLORS.grayColor,
    letterSpacing: 1,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  indecatorStyle: {
    width: '100%',
    backgroundColor: COLORS.secondaryColor,
    borderRadius: 10,
  },
})
