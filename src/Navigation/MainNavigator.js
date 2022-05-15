import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import ApartmentListScreen from '../Screens/ApartmentListScreen';
import ApartmentDetailsScreen from '../Screens/ApartmentDetailsScreen';
import { routeNames } from '.';
const MainStack = createSharedElementStackNavigator()
const MainNavigator = props => {
    return (
        <MainStack.Navigator
            screenOptions={{ headerShown: false }}>
            <MainStack.Screen
                component={ApartmentListScreen}
                name={routeNames.listScreen}
            />
            <MainStack.Screen
                component={ApartmentDetailsScreen}
                name={routeNames.detailScreen}
            />
        </MainStack.Navigator>
    )
}
export default MainNavigator