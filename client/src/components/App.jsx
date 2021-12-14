import React from 'react';
import axios from 'axios';
import Movies from './MovieList.js'
import MovieListRender from './MovieListRender.jsx'
import MovieAdd from './MovieAdd.jsx'
import Search from './Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Movies,
    }
    this.add = this.add.bind(this)
    this.search = this.search.bind(this)
    this.changeWS = this.changeWS.bind(this)
  }

  componentDidMount() {
    axios.get('/api/movies')
    .then((response) => {
      this.setState({Movies: response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  add(Movie) {
    axios.post('/api/movies', Movie)
    .then((response) => {
      this.setState({Movies: response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  changeWS(Movie) {
    let newState = ''
    if (Movie.watchStatus === 'watched') {
      newState = 'unwatched'
    }
    if (Movie.watchStatus === 'unwatched') {
      newState = 'watched'
    }
    axios.patch('/api/movies', {Movie, newState})
    .then((response) => {
      this.setState({Movies: response.data})
    })
    .catch((error) => {
      console.log(error)
    })
  }

  search(query) {
    let searchedMov = []
    let mov = this.state.Movies.map((movie) => {
      if (movie.title.includes(query)) {
        movie.render = true
      } else {
        movie.render = false
      }
        searchedMov.push(movie)
    });
    this.setState({Movies: searchedMov})
  }

  render () {
    return (
      <div>
        <Search searchFor={this.search}/>
        <MovieListRender Movies={this.state.Movies} changeWS={this.changeWS}/>
        <MovieAdd add={this.add}/>
      </div>
    )
  }
};

export default App;