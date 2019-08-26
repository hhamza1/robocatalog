import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import { setSearchField, requestRobots} from '../actions';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }


    render() {
        const {searchField, onSearchChange, robots, isPending } = this.props;
        const roboSearch = robots.filter(
            robot => {
                return robot.name.toLowerCase().includes(searchField.toLowerCase());
            }
        )
 
        return isPending ? 
            <div>Loading</div> :
            (
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
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => requestRobots(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);