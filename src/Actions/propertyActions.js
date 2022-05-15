import { get } from "../Api"
import apiConstants from "../Api/apiConstants"

export const getPropertyList = async (cityId) => {
    try {
        const response = await get(`${apiConstants.endpoints.properties}?cityId=${cityId}`)
        if (response.payload) {
            return Promise.resolve(response.payload)
        }
        return Promise.reject('No data found')
    } catch (error) {
        return Promise.reject(error)
    }
}
export const getPropertyDetails = async (propertyId) => {
    try {
        const response = await get(`${apiConstants.endpoints.properties}${propertyId}`)
        if (response.payload) {
            return Promise.resolve(response.payload)
        }
        return Promise.reject('No data found')
    } catch (error) {
        return Promise.reject(error)
    }
}