import axios from 'axios'

//set
export const setPosts = (posts) => {
    return { type: 'SET_POSTS', payload: posts}
}


//get from api

export const startGetPosts = () => {
    return function(dispatch) {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const posts = response.data
            console.log('start get posts',posts)
            dispatch(setPosts(posts))
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
}