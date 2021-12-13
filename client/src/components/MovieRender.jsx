import React from 'react';

const MovieRender = ({Movie, listing}) => {
  if ((Movie.render === true || Movie.render === undefined) && listing === Movie.watchStatus) {
    return (
      <li>{Movie.title}</li>
    )
  } else {
    return (
      ''
    )
  }
}

export default MovieRender