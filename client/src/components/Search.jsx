import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
  }

  change(event) {
    this.setState({search: event.target.value})
  }

  submit(event) {
    event.preventDefault()
    this.props.searchFor(this.state.search)
  }

  render () {
    return (
      <form onSubmit={this.submit}>
        <label>
          <div>
            Search:
          </div>
          <input onChange={this.change} value={this.state.search}/>
          <button>
            >
          </button>
        </label>
      </form>
    )
  }
}

export default Search