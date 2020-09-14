import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import countReducer from '../reducers/countReducer'
import messagesReducer from '../reducers/messagesReducer'
import usersReducer from '../reducers/usersReducer'
import postsReducer from '../reducers/postsReducer'

//action generators -> action (obj)
//thunk - action generators -> action (obj) + function(dispatch) { }

//     //---one method-----
// const configureStore = () => {
//     const store = createStore(combineReducers({
//         count: countReducer,
//         messages: messagesReducer,
//         users: usersReducer
//     }), applyMiddleware(thunk))
//     return store
// }

const rootReducer = {
    count: countReducer,
    messages: messagesReducer,
    users: usersReducer,
    posts: postsReducer
}

const configureStore = () => {
    const store = createStore(combineReducers(rootReducer),applyMiddleware(thunk)
    )
    return store
}

export default configureStore
    