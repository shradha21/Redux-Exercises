import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// connect allows us to dispatch or read values from store into component
import { connect } from 'react-redux'
//import { increment, decrement } from './actions/countAction'
//import Btn from './components/Btn'
import Messages from './components/Messages'
import UsersList from './components/UsersList'
import UserShow from './components/UserShow'
import PostsList from './components/PostsList'
import PostShow from './components/PostShow'

function App(props) {
  return (
    <Router>
      <React.Fragment>
        
      <h1>Redux Examples - Exercises</h1>
    
      <Link to= "/messages">Messages</Link> | 
      <Link to= "/users">Users</Link> |
      <Link to= "/posts">Posts</Link>

      <Route path= "/messages" component= {Messages} />
      
      <Route path= "/users" component= {UsersList} exact= {true} />
      <Route path= "/users/:id" component= {UserShow} />
      
      <Route path= "/posts" component= {PostsList} exact= {true} />
      <Route path= "/posts/:id" component= {PostShow} />

    </React.Fragment>
    </Router>
    
  );
}

//     <h1> count: {props.count}</h1>
//  <button onClick= {() => {
//           props.dispatch(increment())
//       }}>+</button> 

//       <button onClick= {() => {
//         props.dispatch(decrement())
//       }}>-</button> 

//        <Btn /> 

// const EnhancedComponent = connect()(App)
// export default EnhancedComponent ;

const mapStateToProps = (state) => {
  return {
     count: state.count
  }
}

export default connect(mapStateToProps)(App)