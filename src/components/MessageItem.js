import React from 'react'
import { connect } from 'react-redux'
import { removeMessage, editMessage } from '../actions/messagesAction' 

class MessageItem extends React.Component {
    constructor(props) {
        super()
        this.state = {
            status: false,
            body: props.body
        }
    }

    handleEdit = () => {
        this.setState(prevState => {
            return {
                status: !prevState.status
            }
        })
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            body: this.state.body
        }
        this.props.dispatch(editMessage(this.props.id,formData))
        this.setState(prevState => {
            return {
                status: !prevState.status
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.status ? (
                    <form onSubmit= {this.handleSubmit}>
                        <textarea
                            onChange= {this.handleChange}
                            value= {this.state.body}
                            name= "body"
                        >
                        </textarea>
                        <input type= "submit" value= "update" /> or <button onClick= {this.handleEdit}>cancel</button>
                    </form>
                ) : 
                    <p>{this.props.body} - {this.props.createdAt.toString()}</p> }
                {/* here date is an object,we cannot display an object,we can display array,string,boolean,undefined.So we have to make it string */}
            
                {!this.state.status && (
                    <div>
                        <button onClick= {()=> {
                            this.props.dispatch(removeMessage(this.props.id))
                        }}>remove</button>

                        <button onClick= {this.handleEdit}>edit</button>
                    </div>
                )}
            </div>
        )
    }
}

export default connect()(MessageItem) 