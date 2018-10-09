import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataService from '../data.service';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_details: [],
      isLoading: false
    }

    this.dataService = new DataService();
  }


  componentWillMount() {
    this.setState({ isLoading: true });
    this.dataService.fetchMovieById(this.props.match.params.id, (results) => {
      this.setState({
        search_details: results,
        isLoading: false
      })
    });
  }

  render() {
    const { poster_path, title, tagline, overview } = this.state.search_details;

    return (
      <div className="movie-details container mt-5">
        <div className="row">
          <div className="col-md-6">
            {
              poster_path
              ? <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
              : null
            }
          </div>

          <div className="col-md-6">
            <h3>{title}</h3>
            <h5 style={{color: "#2c4963"}}>{tagline}</h5>
            <div>
              {overview}
            </div>
            <button className="btn btn-search mt-4">
              <Link to="/" style={{display: 'block', padding: 10}}>Back to Search</Link>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetails;