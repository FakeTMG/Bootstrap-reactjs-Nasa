import React, { Component } from 'react'
import Nav from './Nav'

class WrongPage extends Component {
    render() {
        return (
            <div>
                <Nav />
                Sorry This Page Doesn't Exist! Go back to the <a href='/'>Main page</a>
            </div>
        )
    }
}

export default WrongPage
