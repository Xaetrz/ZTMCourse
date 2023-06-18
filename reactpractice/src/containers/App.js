import React from 'react';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    // Fetch placeholder set of robots (users) and assign to state
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  render() {
    const { robots, searchfield } = this.state;

    // Use searchfield to filter out list of robots to display
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    // Display loading if robots file hasn't been loaded yet
    if (robots.length === 0) {
      return <h1>Loading</h1>
    }

    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchfield={searchfield} searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} searchfield={searchfield} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }

  // Event that runs anytime the robot name search field is changed. Updates searchfield state.
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }
}

export default App;