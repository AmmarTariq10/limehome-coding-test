import {
    StyleSheet
} from 'react-native'
import { itemWidth } from '../../Constants/size'
import { vh, vw } from '../../Constants/units'
const styles = StyleSheet.create({
    slideContainer: {
        width: itemWidth,
        backgroundColor: '#F7F1E9',
        flexDirection: 'row',
        borderRadius: 5,
        borderColor: '#9D9E9F',
        borderWidth: 1,
        elevation: 4
      },
      imageBackground: {
        height: itemWidth * 0.3,
        width: itemWidth * 0.3
      },
      imageStyles: {
        borderRadius: 5,
      },
      infoContainer: {
        marginLeft:3*vw
      },
      title: {
        fontSize: 20,
        color: '#4B4B4D',
        fontWeight: 'bold',
        marginBottom:1.5*vh
      },
      detailsContainer: {
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:0.5*vh

      },
      details: {
        color: '#4B4B4D',
        fontSize: 12
      },
      priceLabel: {
    
      },
      price: {
        color: '#B26422'
      },
      slideStyle: {
        alignItems: 'center'
      }
})
export default styles