import React, { Component } from 'react'

class Profile extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.location.state}</h1>
            </div>
        )
    }
}

export default Profile
