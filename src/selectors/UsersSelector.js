export const findUser = (users, id) => {
    return users.find(user => user.id == id)
}