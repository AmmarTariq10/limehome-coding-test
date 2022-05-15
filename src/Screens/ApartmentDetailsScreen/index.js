import React from 'react'
import { } from 'react-native'
import { getPropertyDetails } from '../../Actions/propertyActions'
import Constants from '../../Constants'
import ApartmentDetailsView from './ApartmentDetailsScreen.screen'
const ApartmentDetailsScreen = (props) => {
    const [details, setDetails] = React.useState(null)
    const getDetails = async () => {
        try {
            const response = await getPropertyDetails(props.route.params.propertyId)
            setDetails(response)
        } catch (error) {
            
        }
    }
    React.useEffect(()=>{
        getDetails()
    },[props.route.params.propertyId])
    if(!details) return null
    return (
        <ApartmentDetailsView
            details={details}
            {...props}
        />
    )
}
export default ApartmentDetailsScreen
