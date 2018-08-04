import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import "./App.css";
import CardDetail from "../components/CardDetail";
import Home from "../components/Home";
import { fetchDataIfNeeded } from "../actions";
import Spinner from "../components/utilities/Spinner";

class App extends Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchDataIfNeeded());
  }
  render() {
    const { isFetching } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={ () => ( isFetching ? <Spinner/> : <Home data={this.props.data}/> ) } />
          <Route exact path="/goals/:id" component={CardDetail} />
          <Route component={Home} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const { AppState } = state;
  const { isFetching, data } = AppState || {
    isFetching: false
  };
  return {
    isFetching,
    data
  };
};

export default connect(mapStateToProps)(App);
