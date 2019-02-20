import React, { Component } from 'react'
import Header from './components/Header'
import Movies from './components/Movies'
import Footer from './components/Footer'
import FontAwesome from 'react-fontawesome'

const myMovie = {}

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Movies />
        <Footer />
      </>
    )
  }
}

export default App
