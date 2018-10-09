import React from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import { Card, Button, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap';

const MovieCards = (props) => {
  return (
    <div className="movie-cards">
      <div className="section_title">
      {
        props.section_title 
        ? <div> <h1>{props.section_title}</h1> <button className="btn btn-search mt-4"><Link to="/">to Search</Link></button> </div>
        : null
      }
      </div>

      <Row>
      {props.results.map(movie => {
        return (
        <Col sm="4" key={movie.id}>
          <Card body>
            {
              movie.poster_path
              ? <CardImg top width="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              : <CardImg top width="100%" src="http://www.theprintworks.com/wp-content/themes/psBella/assets/img/film-poster-placeholder.png" alt={movie.title} />
            }
            <CardTitle className="my-4">{movie.title} <small style={{display: 'block', paddingTop: 10, fontSize: 14, color: '#888'}}>{movie.release_date}</small></CardTitle>
            <CardText>
              <Truncate lines={4} ellipsis={<span>...</span>}>
              {movie.overview}
              </Truncate>
            </CardText>
            <Button className="btn-search">
              <Link to={`/movie/${movie.id}`}>Details</Link>
            </Button>
          </Card>
        </Col>
        )
      })}
    </Row>
    </div>
  )
}

export default MovieCards;