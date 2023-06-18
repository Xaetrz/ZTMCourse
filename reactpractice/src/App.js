import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
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
    // Use searchfield to filter out list of robots to display
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    // Display loading if robots file hasn't been loaded yet
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    }

    return (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchfield={this.state.searchfield} searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} searchfield={this.state.searchfield} />
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