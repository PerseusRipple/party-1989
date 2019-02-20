import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <section>
        <header>
          <h2 className="title">{this.props.title}</h2>
          <img src={this.props.image} />

          <h3 className="date">Release Date: {this.props.release_date}</h3>
        </header>

        <h4 className="about">This Movie's About:{this.props.overview}</h4>
      </section>
    )
  }
}

export default Movie
