export const addMessage = (message) => {
      return { type: 'ADD_MESSAGE', payload: message }
  }

export const removeMessage = (id) => {
    return { type: 'REMOVE_MESSAGE', payload: id}
}

export const editMessage = (id,data) => {
    return { type: 'EDIT_MESSAGE', payload: {
        id, data
    }}
}