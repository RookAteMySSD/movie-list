import React from 'react';
import MovieRender from './MovieRender.jsx';

class MovieListRender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listing: 'unwatched'
    }
    this.WatchList = this.WatchList.bind(this)
    this.UnwatchList = this.UnwatchList.bind(this)
  }

  WatchList(event) {
      this.setState({listing: 'watched'})
  }
  UnwatchList(event) {
      this.setState({listing: 'unwatched'})
  }

  render () {
    return (
      <div>
        <span onClick={this.UnwatchList}>Unwatched</span>
        <span> </span>
        <span onClick={this.WatchList}>Watched</span>
        <ul className='List'>
          {this.props.Movies.map((Movie) => <MovieRender Movie={Movie} key={Movie.movie_id} listing={this.state.listing}/>)}
        </ul>
      </div>
    )
  }
};

export default MovieListRender