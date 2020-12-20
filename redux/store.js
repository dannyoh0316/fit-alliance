import { combineReducers, createStore } from 'redux'

const STORE_LOGIN = "STORE_LOGIN"
const STORE_NAME = "STORE_NAME"
const STORE_PROFILEPIC = "STORE_PROFILEPIC"
const STORE_AGE = 'STORE_PAGE'
const STORE_HEIGHT = 'STORE_HEIGHT'
const STORE_WEIGHT = 'STORE_WEIGHT'
const STORE_GENDER = 'STORE_GENDER'
const STORE_LEVEL = 'STORE_LEVEL'
const STORE_MENTAL_CONDITION = 'STORE_MENTAL_CONDITION'

export const storeLogin = (email) => {
    return {
        type: STORE_LOGIN,
        payload: {
            email
        }
    }
}

export const storeName = name => {
    return {
        type: STORE_NAME,
        payload: { name }
    }
}

export const storeProfilepic = profilepic => {
    return {
        type: STORE_PROFILEPIC,
        payload: { profilepic }
    }
}

export const storeAge = age => {
    return {
        type: STORE_AGE,
        payload: { age }
    }
}

export const storeHeight = height => {
    return {
        type: STORE_HEIGHT,
        payload: { height }
    }
}

export const storeWeight = weight => {
    return {
        type: STORE_WEIGHT,
        payload: { weight }
    }
}

export const storeGender = gender => {
    return {
        type: STORE_GENDER,
        payload: { gender }
    }
}

export const storeLevel = level => {
    return {
        type: STORE_LEVEL,
        payload: { level }
    }
}

export const storeMentalCondition = condition => {
    return {
        type: STORE_MENTAL_CONDITION,
        payload: { condition }
    }
}

const initialState = {
    email: "",
    name: "",
    profilepic: "",
    age: 0,
    height: 0,
    weight: 0,
    gender: "male",
    level: "average",
    mentalCondition: ""
}

function userReducer(state = initialState, action) {
    const { payload } = action
    switch (action.type) {
        case STORE_LOGIN:
            return {
                ...state,
                email: payload.email
            }

        case STORE_NAME: 
            return {
                ...state,
                name: payload.name
            }

        case STORE_PROFILEPIC: 
            return {
                ...state,
                profilepic: payload.profilepic
            }

        case STORE_AGE:
            return {
                ...state,
                age: payload.age
            }

        case STORE_HEIGHT:
            return {
                ...state,
                height: payload.height
            }

        case STORE_WEIGHT:
            return {
                ...state,
                weight: payload.weight
            }

        case STORE_GENDER:
            return {
                ...state,
                gender: payload.gender
            }

        case STORE_LEVEL:
            return {
                ...state,
                level: payload.level
            }

        case STORE_MENTAL_CONDITION:
            return {
                ...state,
                mentalCondition: payload.mentalCondition
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    user: userReducer
})

let store = createStore(rootReducer)

export default store
