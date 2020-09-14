const messageInitialState = [
    { id: 1, body: 'This is a new message', createdAt: new Date()}
]

const messagesReducer = (state = messageInitialState ,action) => {
    switch(action.type) {
        case 'ADD_MESSAGE': {
            return state.concat(action.payload)
        }
        case 'REMOVE_MESSAGE': {
            return state.filter(msg => {
                return msg.id !== action.payload
            })
        }
        case 'EDIT_MESSAGE': {
            return state.map(msg => {
                if(msg.id === action.payload.id) {
                    return Object.assign({}, msg,action.payload.data)
                }else {
                    return Object.assign({},msg)
                }
            })
        }
        

        default: {
            return [].concat(state)
        }
    }
}

export default messagesReducer