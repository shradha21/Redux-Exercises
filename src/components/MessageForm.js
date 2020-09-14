import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions/messagesAction'
//import { v4 as uuidv4 } from 'uuid'
import  { nanoid } from 'nanoid'
import  moment  from 'moment'

class MessageForm extends React.Component {
    constructor() {
     super() 
     this.state = {
        body: ''
    }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData= {
            id: nanoid(),  //uuidv4()
            body: this.state.body,
            createdAt: moment().format('LLLL')  //Number(new Date())
        }
        //console.log(formData)
        this.props.dispatch(addMessage(formData))
        this.setState({
            body: ''
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <h2>Add Message</h2>
                <form onSubmit= {this.handleSubmit}>
                    <textarea 
                        value= {this.state.body}
                        name= "body"
                        onChange= {this.handleChange}
                    >
                </textarea><br />

                <input type= "submit" value= "Add Message"  />
                </form>
                
            </React.Fragment>
        )
    }
}


export default connect()(MessageForm)