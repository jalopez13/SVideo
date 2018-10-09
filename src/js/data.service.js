import axios from 'axios';

const DataService = class DataService {
  constructor() {
    this.results = [];
  }

  fetchMovieById(id, cb) {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=57f4fa28df9a9dfed25488efef11d777&language=en-US`)
      .then(res => {
        this.results = res.data;
        cb(this.results);
      })
      .catch(err => console.log(err));
  } 

  fetchMoviesByTerm(term, cb) {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=57f4fa28df9a9dfed25488efef11d777&query=${term}`)
      .then(res => {
        this.results = res.data.results;      
        cb(this.results);
      })
      .catch(err => console.log(err));
  }
}

export default DataService;