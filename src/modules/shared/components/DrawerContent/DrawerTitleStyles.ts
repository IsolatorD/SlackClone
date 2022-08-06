import { StyleSheet } from 'react-native'
import ThemeColors from '../../constants/theme'

export default StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: ThemeColors.black
  },
  titleDark: {
    color: ThemeColors.white
  },
})