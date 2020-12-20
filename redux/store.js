import { combineReducers, createStore } from 'redux'

const STORE_LOGIN = "STORE_LOGIN"

export const storeLogin = (email) => {
    return {
        type: STORE_LOGIN,
        payload: {
            email
        }
    }
}

function userReducer(state = { name: "", email: "" }, action) {
    const { payload } = action
    switch (action.type) {
        case STORE_LOGIN:
            return {
                ...state,
                email: payload.email
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
