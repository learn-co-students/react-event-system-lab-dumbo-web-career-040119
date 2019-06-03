// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    keyAction =() => {
        console.log('Entering password...')
    }
    render() {
        return (
            <div>
                <input onKeyUp={this.keyAction} type="password" />
            </div>
        )
    }
}
