import {
    StyleSheet
} from 'react-native'
import { vh, vw } from '../../Constants/units'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    closeButton:{
        backgroundColor:'#F7F1E9',
        position:'absolute',
        left:3*vw,
        top:4*vh,
        padding:5,
        borderRadius:2,
        elevation:1
    },
    sliderContainer: {
        marginBottom: 2 * vh
    },
    contentDetails: {
        width:100*vw,
        paddingHorizontal:4*vw
    },
    name:{
        fontSize:3*vh,
        marginBottom:1*vh,
        color:'#4B4B4D',
        fontWeight:'bold',
        textTransform:'capitalize'
    },
    distanceContainer:{
        flexDirection:'row'
    },
    distance:{
        fontSize:2.5*vh,
        marginLeft:0.5*vw,
        color:'#4B4B4D',
        marginBottom:2*vh
    },
    address:{
        fontSize:2.5*vh,
        marginLeft:0.5*vw,
        color:'#4B4B4D',
        marginBottom:2*vh
    },
    description:{
        lineHeight:3.5*vh,
        fontSize:2.8*vh,
        marginLeft:0.5*vw,
        color:'#4B4B4D',
        marginBottom:2*vh
    },
    desContainer:{
        marginBottom:2*vh,
        borderBottomWidth:1,
        borderColor:'#9D9E9F'
    },
    heading:{
        fontSize:3*vh,
        color:'#4B4B4D',
        fontWeight:'bold',
        marginBottom:2*vh
    },
    groups:{
        flexDirection:'row',
        flexWrap:'wrap',
        borderBottomWidth:1,
        borderColor:'#9D9E9F'
    },
    space:{
        fontSize:1.8*vh,
        color:'#4B4B4D'
    },
    spaceContainer:{
        backgroundColor:'#C9CBAB',
        padding:10,
        borderRadius:5,
        marginRight:0.5*vw,
        marginBottom:2*vw,
    },
    groupName:{
        marginBottom:0.5*vh,
        fontSize:1.8*vh,
        color:'#4B4B4D',
        fontWeight:'bold',
        marginTop:0.5*vh,
        textAlign:"right",
        marginBottom:3*vh
    },
    footer:{
        backgroundColor:'#C9CBAB',
        flexDirection:'row',
        paddingVertical:1.5*vh,
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:3*vw,
        elevation:1
    },
    priceContainer:{
        flexDirection:'row',
    },
    priceLabel:{
        fontSize:2.3*vh,
        color:'#4B4B4D'
    },
    price:{
        fontSize:2.3*vh,
        color:'#B26422',
        marginLeft:2*vw
    },
    exploreButton:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#4D6447',
        paddingVertical:1.5*vh,
        borderRadius:5,
        paddingHorizontal:3*vw
    },
    exploreText:{
        color:'#F7F1E9',
        fontSize:2*vh,
        marginRight:2*vw

    }
})
export default styles