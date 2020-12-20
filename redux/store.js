import { combineReducers, createStore } from 'redux'

const STORE_LOGIN = "STORE_LOGIN"

function userReducer(state = { name: "", email: "" }, action) {
    const { payload } = action
    switch (action.type) {
        case STORE_LOGIN:
            return {
                ...state,
                name: payload.name,
                email: payload.email
            }

        default: 
            return state
    }
}

rootReducer = combineReducers({
    user: userReducer
})

let store = createStore(rootReducer)

export default store
