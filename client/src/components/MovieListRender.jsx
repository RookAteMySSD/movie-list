import React from 'react';
import MovieRender from './MovieRender.jsx';

const MovieListRender = ({Movies}) => {
  var movieList = Movies.map((Movie) => <MovieRender Movie={Movie} />)
  return (
    <ul className='List'>
      {movieList}
    </ul>
  )
};

export default MovieListRender