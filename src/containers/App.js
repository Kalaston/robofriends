import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      search: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(myjson => this.setState({ robots: myjson }));
  }

  onChange(e) {
    this.setState({ search: e.target.value.toLowerCase() });
  }

  render() {
    const newRobots = this.state.robots.filter(robot => {
      if (robot.name.toLowerCase().includes(this.state.search)) {
        return true;
      }
      return false;
    });
    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox onChange={this.onChange} />
        <Scroll>
          <CardList robots={newRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
