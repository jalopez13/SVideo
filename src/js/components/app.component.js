import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DataService from '../data.service';

import AppContext from '../appContext';

// components
import Search from './search.component';
import MovieDetails from './movie.details.component';
import TrendingMovies from './trending.movies.component';
import NotFound from './notfound.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_results: [],
      search_term: '',
      isLoading: false,
      handleChange: this.handleChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this)
    }
    this.dataService = new DataService();
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({search_term: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const term = this.state.search_term;
    this.setState({ isLoading: true });
    this.dataService.fetchMoviesByTerm(term, (results) => {
      this.setState({
        search_results: results,
        isLoading: false
      });
    });
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Router>
          <div className="container app">
            <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/movie/:id" component={MovieDetails} />
              <Route path="/trending" component={TrendingMovies} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AppContext.Provider>
    )
  }
}

export default  App;
