import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/countAction'

function Button(props) {
    return (
        <React.Fragment>
            <button onClick = {()=> {
                props.dispatch(increment())
            }}> + </button>

            <button onClick = {()=> {
                props.dispatch(decrement())
            }}> - </button>

        </React.Fragment>
    )
}

export default connect() (Button)