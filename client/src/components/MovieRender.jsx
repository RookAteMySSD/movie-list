import React from 'react';

class MovieRender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.changeWS = this.changeWS.bind(this)
  }

  changeWS(event) {
    this.props.changeWS(this.props.Movie)
  }

  render () {
    if ((this.props.Movie.render === true || this.props.Movie.render === undefined)
    && this.props.listing === this.props.Movie.watchStatus) {
      return (
        <li onClick={this.changeWS}>{this.props.Movie.title}</li>
      )
    } else {
      return (
        ''
      )
    }
  }
}

export default MovieRender