import {StyleSheet} from 'react-native'
import {COLORS} from '../../../config/constants'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.whiteColor,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1.1,
    marginBottom: 15,
    marginTop: 15,
  },
  itemContainer: {
    padding: 10,
    paddingHorizontal: 15,
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1.1,
    color: COLORS.blackColor,
  },
})
