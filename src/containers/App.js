import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import { setSearchField } from "../actions/index";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    console.log(this.props);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(myjson => this.setState({ robots: myjson }));
  }

  render() {
    const { robots } = this.state;
    const { searchField } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox onChange={this.props.setSearchField} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchField: state.searchField
});

const mapDispatchToProps = {
  setSearchField
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
