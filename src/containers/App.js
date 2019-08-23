import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

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
            this.setState({robots : robots});
        });
        
    }

    onSearchChange(event) {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const roboSearch = this.state.robots.filter(
            robots => {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            }
        )

        return (
            <div className='tc'>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={roboSearch}/>
            </div>
        )
    }
}

export default App;