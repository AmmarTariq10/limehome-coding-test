import React from 'react'
import { getPropertyList } from '../../Actions/propertyActions'
import Constants from '../../Constants'
import ApartmentListView from './ApartmentListView.screen'
const ApartmentListScreen = (props) => {
    const [selectedLocation, setSelectedLocation] = React.useState(0)
    const [locations, setLocations] = React.useState([])
    const getList = async () => {
        try {
            const res = await getPropertyList(32)
            setLocations(res)
        } catch (error) {
        }
    }
    React.useEffect(() => {
        getList()
    }, [])
    return (
        <ApartmentListView
            onSelectedLocationChange={setSelectedLocation}
            selected={selectedLocation}
            locations={locations}
            navigation={props.navigation}
        />
    )
}
export default ApartmentListScreen
