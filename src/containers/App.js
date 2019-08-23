import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
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
        .then(robots => {
            this.setState({robots});
        });
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const roboSearch = this.state.robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            }
        )

        return (
            <div className='tc'>
                <h1>RoboSearch</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <ErrorBoundary>
                    <CardList robots={roboSearch}/>
                </ErrorBoundary>
            </div>
        )
    }
}

export default App;