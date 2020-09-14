import React from 'react'
import { connect } from 'react-redux'
import { findUser } from '../selectors/UsersSelector'

class UserShow extends React.Component {

    render(){
        return (
            <div>
                {this.props.user && (
                    <div>
                        <h2>User Show { this.props.user.id } </h2>
                         <p> { this.props.user.name } </p>
                         <p> { this.props.user.email} </p>
                    </div>
                )}
            </div>  
        )
    }
}   

const mapStateToProps = (state, props) => {
    return {
        user: findUser(state.users, props.match.params.id)
    }
}

export default connect(mapStateToProps)(UserShow)