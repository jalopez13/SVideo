import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import MovieCards from './movie.cards.component';
import AppContext from '../appContext';

class Search extends Component {
  render() {
    return (
      <AppContext.Consumer>
      {context => (
        <React.Fragment>
          <div className="aligner">
            <div className="aligner-item">
              <div className="search-form">

                <h1>SVIDEO</h1>

                <form onSubmit={context.handleSubmit}>
                  <div className="form-group">
                    <input 
                      type="text" 
                      className="search form-control" 
                      value={context.search_term}
                      placeholder="Search for movies..." 
                      onChange={context.handleChange}/>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Search" className="btn btn-block btn-search" />
                  </div>
                  <Link to="/trending">Or All Trending</Link>
                </form>
              </div>
            </div>
          </div>

          
          {context.isLoading 
            ? <ReactLoading className="spinner" type="spokes" color="#fff" height={60} width={60} /> 
            : <MovieCards results={context.search_results} />}
          
        </React.Fragment>
      )}
    </AppContext.Consumer>
    )
  }
}


export default Search;