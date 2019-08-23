import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField } from '../actions';
import { connect } from 'react-redux';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots:[],
        }
    }

    

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robots => {
            this.setState({robots});
        });
        
    }


    render() {
        const {searchField, onSearchChange } = this.props;
        const roboSearch = this.state.robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(searchField.toLowerCase());
            }
        )
 
        return (
            <div className='tc'>
                <h1>RoboSearch</h1>
                <SearchBox searchChange={onSearchChange}/>
                <ErrorBoundary>
                    <CardList robots={roboSearch}/>
                </ErrorBoundary>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);