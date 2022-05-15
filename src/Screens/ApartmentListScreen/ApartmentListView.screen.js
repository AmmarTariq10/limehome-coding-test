import React from "react"
import { StyleSheet, View } from 'react-native';
import MapView from "react-native-maps"
import Carousel from "react-native-snap-carousel"
import LocationMarker from "../../Components/LocationMarker"
import Constants from "../../Constants"
import { sliderWidth } from "../../Constants/size"
import styles from './styles'
import ApartmentCard from "../../Components/ApartmentCard";
import { routeNames } from "../../Navigation";
const ApartmentListView = props => {
    const map = React.useRef(null)
    const carousel = React.useRef(null)
    React.useEffect(() => {
        if (props.locations?.length > 0) handleSnapToItem(0)
    }, [props.locations])
    const renderMarkers = () => {
        return props.locations.map((item, index) => {
            return (
                <LocationMarker
                    onPress={() => handleMarkerPress(index)}
                    isSelected={index === props.selected}
                    index={index}
                    item={item}
                />
            )
        })
    }
    const handleCardPress = (id) => {
        props.navigation.navigate(routeNames.detailScreen,{
            propertyId:id
        })
    }
    const renderSlide = ({ item, index }) => {
        return (
            <ApartmentCard
                onPress={() => handleCardPress(item.id)}
                item={item}
                index={index}
            />
        )
    }
    const handleMarkerPress = index => {
        if (index === props.selected) return
        carousel.current.snapToItem(index, true)
        animateRegion(index)
    }
    const handleSnapToItem = index => {
        animateRegion(index)
    }
    const animateRegion = index => {
        const region = {
            latitude: props.locations[index].location.lat,
            longitude: props.locations[index].location.lng,
            ...Constants.deltas
        }
        map.current.animateToRegion(region, 1000)
        props?.onSelectedLocationChange(index)
    }
    return (
        <View style={styles.container}>
            <MapView
                ref={map}
                initialRegion={Constants.mapInitialRegion}
                style={StyleSheet.absoluteFill}
            >
                {renderMarkers()}
            </MapView>
            <View style={styles.sliderContainer}>
                <Carousel
                    loop={true}
                    ref={carousel}
                    data={props.locations}
                    renderItem={renderSlide}
                    sliderWidth={sliderWidth}
                    itemWidth={sliderWidth}
                    onSnapToItem={handleSnapToItem}
                    slideStyle={styles.slideStyle}
                />
            </View>
        </View>
    )
}
export default ApartmentListView