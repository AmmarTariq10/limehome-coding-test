import React from 'react'
import colors from '../../Constants/colors'
import LocationMarkerView from './LocationMarker.component'
const ApartmentCard = (props) => {
    var coordinates = null
    var title = ""
    var description = ""
    var pinColor = colors.pinColor
    if (props.item) {
        if (props?.item?.location && props?.item?.location?.lat && props?.item?.location?.lng) {
            coordinates = {
                latitude: props?.item?.location?.lat,
                longitude: props?.item?.location?.lng,
            }
        }
        if (props?.item?.name) {
            title = props?.item?.name
        }
        if (props?.item?.location?.addressLine1) {
            description = props?.item?.description
        }
    }
    if(props.isSelected){
        pinColor = colors.selectedPin
    }else{
        pinColor = colors.pinColor
    }
    if(coordinates === null) return null;
    return (
        <LocationMarkerView
            onPress={props.onPress}
            title={title}
            description={description}
            coordinate={coordinates}
            pinColor={pinColor}
        />
    )
}
export default ApartmentCard
