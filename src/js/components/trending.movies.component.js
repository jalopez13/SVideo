import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios';
import MovieCards from './movie.cards.component';

export default class TrendingMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trending_movies: [],
      isLoading: false
    }
  }

  componentWillMount() {
    this.setState({isLoading: true});
    axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=57f4fa28df9a9dfed25488efef11d777&language=en-US`)
    .then(res => {
      this.setState({
        trending_movies: res.data.results,
        isLoading: false
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      {this.state.isLoading 
        ? <ReactLoading className="spinner" type="spokes" color="#fff" height={60} width={60} /> 
        : <MovieCards results={this.state.trending_movies} section_title="Trending Movies" />}
      </div>

      // <AppContext.Consumer>
      //   {context => (
      //     <div className="trending-movies">
      //     <pre>
      //       <code>
      //       {JSON.stringify(context)}
      //       </code>
      //     </pre>
      //       {context.trending_movies.map(movie => {
      //         <h1>{movie.title}</h1>
      //       })}
      //     </div>
      //   )}
      // </AppContext.Consumer>
    )
  }
}
