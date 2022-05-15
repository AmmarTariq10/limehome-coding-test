import React from "react"
import { Marker } from "react-native-maps"
const LocationMarker = props => {
    return (
        <Marker
            tappable={true}
            onPress={props.onPress}
            title={props.title}
            description={props.description}
            coordinate={props.coordinate}
            pinColor={props.pinColor}
        />
    )
}
export default LocationMarker