import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfield:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robots => this.setState({robots}));
        
    }

    render() {
        console.log(this.state.robots);
        return (
            <div className='tc'>
                <h1>Hello World</h1>
            </div>
        )
    }
}
