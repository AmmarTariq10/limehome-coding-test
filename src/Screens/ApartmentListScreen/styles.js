import {
  StyleSheet
} from 'react-native'
import { itemWidth } from '../../Constants/size'
import { vh, vw } from '../../Constants/units'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-end'
  },
  slideContainer: {
    width: 100 * vw,
    marginBottom: 20
  },
  slideStyle: {
    alignItems: 'center'
  },
  sliderContainer:{
    marginBottom:3*vh
  }
})
export default styles