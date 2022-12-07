import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Loading extends Component {
    render() {
        return (
            // <div style={{ position:"absolute",top: "50%",left: "50%"}}>
            <div style={{position:"absolute",left:"50%"}}>
                <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Loading
