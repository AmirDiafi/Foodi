import {StyleSheet} from 'react-native'
import {COLORS} from '../../../../../../config/constants'

export const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 25,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.blackColor,
  },
  price: {
    fontSize: 28,
    fontWeight: '400',
    color: COLORS.blackColor,
  },
  descContainer: {},
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.secondGray,
  },
})
