// import React from 'react'
// import { connect } from 'react-redux'
// import { findPost } from '../selectors/PostsSelector'


// class PostShow extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 {this.props.post && 
//                     <React.Fragment>
//                         <h2>Post Show: {this.props.post.id}  </h2>
//                         <p> name : { this.props.post.username} </p>
//                         <p> title: { this.props.post.title } </p>
//                         <p> body: { this.props.post.body }</p>
//                     </React.Fragment>
//                 }       
//             </React.Fragment>
//         )
//     }
// }

// const mapStateToProps = (state, props) => {
//    post: findPost(state.posts,props.match.params.id)
//     return {
//         post,
//         user: findUserName(state.users,post.userId)
    
//     }
// }

// export default connect(mapStateToProps)(PostShow) 

import React from 'react'
import { connect } from 'react-redux'

class PostShow extends React.Component {
    render() {
        return (
            <div>
                {this.props.user &&
                    <div>
                        <h2>{this.props.user.username}</h2>
                    </div>
                }
                {
                    this.props.post && (
                        <div>
                            <h2>Post Show - {this.props.post.id}</h2>
                            <p>Title:- {this.props.post.title}</p>
                            <p>Body:- {this.props.post.body}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const post = state.posts.find(post => post.id == props.match.params.id)
    return {
        post,
        user: state.users.find(user => user.id ==  post.userId)
    }
}

export default connect(mapStateToProps)(PostShow)