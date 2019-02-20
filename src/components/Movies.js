import React, { Component } from 'react'
import Movie from './Movie'

import data from '../Data/movies.json'

class Movies extends Component {
  render() {
    return (
      <main>
        {data.results.map(movie => {
          return (
            <Movie
              key={movie.id}
              title={movie.title}
              overview={movie.overview}
              release_date={movie.release_date}
              image={
                'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' +
                movie.poster_path
              }
            />
          )
        })}
      </main>
    )
  }
}

export default Movies

//  // componentDidMount() {
//     fetch('http://localhost:8080/movies')
//       .then(resp => resp.json())
//       .then(data => {
//         console.log('from server')
//         console.log(data)
//         this.setState({
//           movies: data
//         })
//       })
// }
