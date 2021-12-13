import React from 'react';

class MovieAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
  }

  change(event) {
    this.setState({title: event.target.value})
  }

  submit(event) {
    event.preventDefault();
    this.props.add(this.state);
    this.setState({title: ''})
  }

  render () {
    return (
      <form onSubmit={this.submit}>
        <label>
          <div>Movie:</div>
          <input onChange={this.change} value={this.state.title}/>
        </label>
      <button>Add</button>
      </form>
    )
  }
}

export default MovieAdd