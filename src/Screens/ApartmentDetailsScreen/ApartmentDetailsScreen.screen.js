import React from "react"
import { View, ImageBackground, Text, ScrollView, TouchableOpacity } from 'react-native'
import Carousel from "react-native-snap-carousel"
import Lightbox from 'react-native-lightbox';

import Icon from '@expo/vector-icons/MaterialIcons';
import { vh, vw } from "../../Constants/units"
import styles from "./styles"

const ApartmentDetailsView = props => {
    const [activeSlide, setActive] = React.useState(0)
    const details = props.details
    const images = details.images
    const renderSlide = ({ item, index }) => {
        return (
            <Lightbox style={{ flex: 1 }}>
                <ImageBackground key={String(index)} source={{ uri: item.url }} style={{ backgroundColor: 'light-grey', height: 30 * vh, width: 100 * vw }}>
                </ImageBackground>
            </Lightbox>
        )
    }
    const close = () => {
        props.navigation.pop()
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.sliderContainer}>
                    <Carousel
                        inactiveSlideOpacity={0.98}
                        inactiveSlideScale={0.98}
                        onSnapToItem={setActive}
                        sliderWidth={100 * vw}
                        itemWidth={100 * vw}
                        data={images}
                        renderItem={renderSlide}
                    />
                    <TouchableOpacity onPress={close} style={styles.closeButton}>
                        <Icon
                            size={2.5*vh}
                            color='#4B4B4D'
                            name='close'
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.contentDetails}>
                    <Text style={styles.name}>
                        {details.name}
                    </Text>
                    <View style={styles.distanceContainer}>
                        <Icon
                            color={'#B26422'}
                            name='location-pin'
                            size={2.5 * vh}
                        />
                        <Text style={styles.distance}>
                            {details.distance.toFixed(2)} km from city center
                        </Text>
                    </View>
                    <View style={styles.desContainer}>
                        <Text style={styles.description}>
                            {details.description}
                        </Text>
                    </View>
                    <Text style={styles.heading}>
                        Room types available in this location
                    </Text>
                    {details.unit_groups.map((group, index) => {
                        return (
                            <View>
                                <View style={styles.groups}>
                                    {group.spaces.map(space => {
                                        return (
                                            <View style={styles.spaceContainer}>
                                                <Text style={styles.space}>
                                                    {space.name}
                                                </Text>
                                            </View>
                                        )
                                    })}
                                </View>
                                <Text style={styles.groupName}>
                                    {group.name}
                                </Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceLabel}>
                        From
                    </Text>
                    <Text style={styles.price}>
                        55.00/Night
                    </Text>
                </View>
                <TouchableOpacity style={styles.exploreButton}>
                    <Text style={styles.exploreText}>
                        EXPLORE
                    </Text>
                    <Icon
                        size={2 * vh}
                        color={'#F7F1E9'}
                        name='arrow-forward'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ApartmentDetailsView