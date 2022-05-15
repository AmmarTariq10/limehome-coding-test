import React from 'react'
import { getPropertyList } from '../../Actions/propertyActions'
import Constants from '../../Constants'
import ApartmentListView from './ApartmentListView.screen'
const ApartmentListScreen = (props) => {
    const [selectedLocation, setSelectedLocation] = React.useState(0)
    React.useEffect(()=>{
        getPropertyList(32)
    },[])
    return (
        <ApartmentListView
            onSelectedLocationChange={setSelectedLocation}
            selected={selectedLocation}
            locations={Constants.locations}
            navigation={props.navigation}
        />
    )
}
export default ApartmentListScreen
