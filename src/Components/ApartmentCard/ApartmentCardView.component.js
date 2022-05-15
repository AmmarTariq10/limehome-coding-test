import React from "react"
import {
    View,
    ImageBackground,
    Text,
    TouchableOpacity
} from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons';
import styles from './styles'
import { SharedElement } from "react-navigation-shared-element";
const ApartmentCardView = props => {
    const item = props.item
    const index = props.index
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.slideContainer}>
            <SharedElement id={`${item.url}`}>
                <ImageBackground
                    style={styles.imageBackground}
                    imageStyle={styles.imageStyles}
                    source={{ uri: item.images[0].url }}
                >
                </ImageBackground>
            </SharedElement>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.location.addressLine1}</Text>
                <View style={styles.detailsContainer}>

                    <Icon
                        color={'#B26422'}
                        name='location-pin'
                    />
                    <Text style={styles.details}>
                        {item.distance.toFixed(2)}
                        km from city center
                    </Text>

                </View>
                <Text style={styles.priceLabel}>
                    From <Text style={styles.price}>
                        55.00€/Night
                    </Text>
                </Text>
            </View>


        </TouchableOpacity>
    );
}
export default ApartmentCardView