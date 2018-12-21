let initialState = {
    name: "",
    address: "",
    city: "",
    stateName: "",
    zip: 0,
    image: "",
    mortgage: "",
    rent: ""
}

const GET_PROPERTY_INFO = 'GET_PROPERTY_INFO'
const GET_PROPERTY_IMAGE = 'GET_PROPERTY_IMAGE'
const GET_PROPERTY_RATES = 'GET_PROPERTY_RATES'
const FORGET_PROPERTY_INFO = 'FORGET_PROPERTY_INFO'


export function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_PROPERTY_INFO :
            return Object.assign({}, state, {
                name: action.payload.name,
                address: action.payload.address,
                city: action.payload.city,
                stateName: action.payload.stateName,
                zip: action.payload.zip
            })

        case GET_PROPERTY_IMAGE :
            return Object.assign({}, state, {image: action.payload.image})

        case GET_PROPERTY_RATES :
            return Object.assign({}, state, {
                mortgage: action.payload.mortgage,
                rent: action.payload.rent
            })
        
        case FORGET_PROPERTY_INFO :
            return Object.assign({}, state, {
                name: action.payload.name,
                address: action.payload.address,
                city: action.payload.city,
                stateName: action.payload.stateName,
                zip: action.payload.zip,
                image: action.payload.image,
                mortgage: action.payload.mortgage,
                rent: action.payload.rent
            })

        default: return state
    }
}

export function getPropertyInfo(name, address, city, stateName, zip) {
    return {
        type: GET_PROPERTY_INFO,
        payload: {
            name,
            address,
            city,
            stateName,
            zip
        }
    }
}

export function getPropertyImage(image) {
    return {
        type: GET_PROPERTY_IMAGE,
        payload: {
            image
        }
    }
}

export function getPropertyRates(mortgage, rent) {
    return {
        type: GET_PROPERTY_RATES,
        payload: {
            mortgage,
            rent
        }
    }
}

export function forgetPropertyInfo() {
    return {
        type: FORGET_PROPERTY_INFO,
        payload: {
            initialState
        }
    }
}



export default reducer