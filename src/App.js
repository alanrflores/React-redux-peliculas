import React from "react";
import { Route } from "react-router-dom";
import Home from './components/Home/Home.jsx'
import MovieDetail from './components/MovieDetail/MovieDetail.jsx'
import CreateMovie from './components/CreateMovie/CreateMovie.jsx'
import Nav from './components/Nav/Nav.jsx'

function App() {
  return (
    <>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/movie/:id'  component={MovieDetail} />
      <Route path='/movies/create' component={CreateMovie} />

    </>
  );
}
export default App;
