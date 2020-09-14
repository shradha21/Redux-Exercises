import React from 'react' 
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { startGetPosts } from '../actions/postsAction'

class PostsList extends React.Component {

    componentDidMount() {
        if(this.props.posts.length == 0){
            this.props.dispatch(startGetPosts())
        }
    }


    render() {
        return (
            <React.Fragment>
              <h2>Post List - {this.props.posts.length}</h2>
              <ul>
                  {
                      this.props.posts.map(post => {
                      return <li key= {post.id}> <Link to= {`posts/${post.id}`}>{post.title}</Link></li>
                      })
                  }
              </ul>
              
            </React.Fragment>
            

        )
    }

}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostsList)